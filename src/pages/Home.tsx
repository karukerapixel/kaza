import React, { useEffect, useState } from 'react';
import { firebaseDB } from 'config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { GalleryList, GalleryWrapper } from '../styles/Home';
import HousingCard from '../components/HousingCard';
import Loader from 'components/Loader';

interface Housing {
  id: string;
  title: string;
  cover: string;
}

const Home: React.FC = () => {
  const housingsCollectionRef = collection(firebaseDB, 'housings');
  const [housings, setHousings] = useState<Housing[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHousings = async () => {
      try {
        const request = await getDocs(housingsCollectionRef);
        const firebaseHousings = request.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as Housing[];

        // Combiner les données locales et Firebase
        setHousings([...firebaseHousings]);
      } catch (error) {
        console.error('Error fetching housings:', error);
      } finally {
        setLoading(false)
      }
    };

    fetchHousings();
  }, [housingsCollectionRef]);

  if (loading) return <Loader />;

  return (
    <GalleryWrapper>
      <GalleryList>
        {housings.map((housing) => (
          <HousingCard
            key={housing.id}
            id={housing.id}
            title={housing.title}
            picture={housing.cover}
          />
        ))}
      </GalleryList>
    </GalleryWrapper>
  );
};

export default Home;
