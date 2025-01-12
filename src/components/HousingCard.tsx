import React from 'react';
import { Link } from 'react-router-dom';
import { HousingCardWrapper } from '../styles/HousingCard';

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
        <h2>{title}</h2>
      </Link>
    </HousingCardWrapper>
  );
};

export default HousingCard;
