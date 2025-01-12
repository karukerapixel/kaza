import React, { useState, useCallback, useEffect } from 'react';
import {
  CarouselButton,
  CarouselPictures,
  CarouselWrapper,
} from '../styles/Carousel';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type CarouselProps = {
  pictures: string[] | undefined;
};

const Carousel: React.FC<CarouselProps> = ({ pictures = [] }) => {
  const [currentPicture, setCurrentPicture] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const hasMultiplePictures = pictures.length > 1;

  // Get the index of the next or previous picture
  const getNextIndex = useCallback(
    (direction: 'previous' | 'next'): number => {
      if (direction === 'previous') {
        return currentPicture === 0 ? pictures.length - 1 : currentPicture - 1;
      }
      return currentPicture === pictures.length - 1 ? 0 : currentPicture + 1;
    },
    [currentPicture, pictures.length]
  );

  // Handle navigation between pictures
  const handleClick = useCallback(
    (direction: 'previous' | 'next') => {
      if (!pictures || pictures.length === 0) return;
      setCurrentPicture(getNextIndex(direction));
    },
    [pictures, getNextIndex]
  );

  // Effect for automatic slideshow
  useEffect(() => {
    if (isPaused || !pictures || pictures.length === 0) return;

    const interval = setInterval(() => handleClick('next'), 3000);
    return () => clearInterval(interval);
  }, [isPaused, pictures, handleClick]);

  if (!pictures || pictures.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <CarouselWrapper
      role="region"
      aria-label="Image carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {hasMultiplePictures && (
        <CarouselButton
          type="button"
          aria-label="Previous picture"
          onClick={() => handleClick('previous')}
          style={{ left: '5%' }}
        >
          <FiChevronLeft aria-hidden="true" />
        </CarouselButton>
      )}

      {pictures.map((picture, index) => (
        <CarouselPictures
          key={index}
          src={picture}
          alt={`Slide ${index + 1}`}
          aria-hidden={currentPicture !== index}
          style={{ display: currentPicture === index ? 'block' : 'none' }}
        />
      ))}

      {hasMultiplePictures && (
        <CarouselButton
          type="button"
          aria-label="Next picture"
          onClick={() => handleClick('next')}
          style={{ right: '5%' }}
        >
          <FiChevronRight aria-hidden="true" />
        </CarouselButton>
      )}
    </CarouselWrapper>
  );
};

export default Carousel;
