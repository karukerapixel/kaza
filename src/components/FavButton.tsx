import React, { CSSProperties } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { FaHeart } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import Button from './Button';

type FavButtonProps = {
  id: string;
  text?: boolean;
  style?: CSSProperties;
};

type Favorite = {
  id: string;
};

const FavButton: React.FC<FavButtonProps> = ({ id, text, style }) => {
  const { storedValue, addItem, removeById } = useLocalStorage<Favorite>('fav');

  const isFavorite = storedValue?.some((item) => item.id === id);

  return isFavorite ? (
    <Button
      icon={<FaHeart color="red" />}
      text={text === true && 'Supprimer'}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        removeById(id);
      }}
    />
  ) : (
    <Button
      icon={<FiHeart />}
      text={text === true && 'Enregistrer'}
      style={style}
      onClick={(e) => {
        e.preventDefault();
        addItem({ id });
      }}
    />
  );
};

export default FavButton;
