import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { collection, getDocs } from 'firebase/firestore';
import { firebaseDB } from 'config/firebase';
import { GalleryList, GalleryWrapper } from 'styles/Home';

import Loader from 'components/Loader';
import HousingCard from 'components/HousingCard';

// Type definition for housing data
type Housing = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};

// Favorite component
const Favorite: React.FC = () => {
  const { storedValue } = useLocalStorage('fav'); // Retrieve the favorite housing IDs from localStorage
  const housingsCollectionRef = collection(firebaseDB, 'housings');

  const [favHousings, setFavHousings] = useState<Housing[]>([]); // List of favorite housings
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchFavoriteHousings = async () => {
      try {
        setLoading(true);

        // Fetch all housings from Firebase
        const request = await getDocs(housingsCollectionRef);
        const data = request.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Housing[];

        // Filter housings based on favorites stored in localStorage
        const favorites = data.filter((h) => storedValue && storedValue.find((fav) => fav.id === h.id));

        setFavHousings(favorites);
      } catch (error) {
        console.error('Error fetching favorite housings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteHousings();
  }, [storedValue]);

  if (loading) return <Loader />;

  return (
    <GalleryWrapper>
      <GalleryList>
        {favHousings.length > 0 ? (
          favHousings.map((housing) => <HousingCard key={housing.id} id={housing.id} title={housing.title} picture={housing.cover} />)
        ) : (
          <li>Aucun logement ajouté aux favoris.</li>
        )}
      </GalleryList>
    </GalleryWrapper>
  );
};

export default Favorite;
