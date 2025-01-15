import React from 'react';
import { Link } from 'react-router-dom';
import { HousingCardWrapper } from '../styles/HousingCard';
import FavButton from './FavButton';

interface HousingCardProps {
  id: string;
  title: string;
  picture: string;
}

const HousingCard: React.FC<HousingCardProps> = ({ id, title, picture }) => {
  return (
    <HousingCardWrapper>
      <Link to={`/housings/${id}`}>
        <img src={picture} alt={`${title}`} />
        <div>
          <h2>{title}</h2>
          <FavButton id={id} />
        </div>
      </Link>
    </HousingCardWrapper>
  );
};

export default HousingCard;
