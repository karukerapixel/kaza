import React from 'react';
import { RatingWrapper } from '../styles/Rating';
import redStar from '../assets/red-star.png';
import greyStar from '../assets/grey-star.png';

interface RatingProps {
  score: string;
}

const Rating: React.FC<RatingProps> = ({ score }) => {
  const hostRate = [];
  const MAX_RATING = 5;

  // Convert the score to number with validation
  const parsedScore = parseFloat(score); // Convert the string to number
  const validScore = !isNaN(parsedScore) ? Math.max(0, Math.min(parsedScore, MAX_RATING)) : 0;

  // Adding full stars according to the valid score
  for (let i = 0; i < validScore; i++) {
    hostRate.push(<img key={`full-${i}`} src={redStar} alt="full star" />);
  }

  // Adding empty stars to complete until MAX_RATING
  for (let i = 0; i < MAX_RATING - validScore; i++) {
    hostRate.push(<img key={`empty-${i}`} src={greyStar} alt="empty star" />);
  }

  return <RatingWrapper>{hostRate}</RatingWrapper>;
};

export default Rating;
