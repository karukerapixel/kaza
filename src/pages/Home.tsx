import React from 'react';
import { GalleryList, GalleryWrapper } from '../styles/Home';
import HousingCard from '../components/HousingCard';
import housings from '../data/housings.json'

const Home: React.FC = () => {
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
