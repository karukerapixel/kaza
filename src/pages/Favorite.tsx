import React, { useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { GalleryList, GalleryWrapper } from 'styles/Home';
import HousingCard from 'components/HousingCard';
import housings from '../data/housings.json';

// Type definition for housing data
type HousingData = {
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
  const { storedValue } = useLocalStorage('fav'); // Retrieve the 'fav' data from localStorage using the custom hook
  const [favoriteHousings, setFavoriteHousings] = useState<HousingData[]>([]); // State to store the list of favorite housing data

  // useEffect hook that runs when storedValue changes
  useEffect(() => {
    // Check if there are any favorite items in localStorage
    if (storedValue && storedValue.length > 0) {
      // Filter the housings to get only the ones that are marked as favorites
      const favorites = housings.filter((housing) =>
        storedValue.some((fav) => fav.id === housing.id)
      );
      setFavoriteHousings(favorites);
    }
  }, [storedValue]);

  return (
    <GalleryWrapper>
      <GalleryList>
        {favoriteHousings.length > 0 ? (
          favoriteHousings.map((housing) => (
            <HousingCard
              key={housing.id}
              id={housing.id}
              title={housing.title}
              picture={housing.cover}
            />
          ))
        ) : (
          <p>Aucun logement ajouté aux favoris.</p>
        )}
      </GalleryList>
    </GalleryWrapper>
  );
};

export default Favorite;
