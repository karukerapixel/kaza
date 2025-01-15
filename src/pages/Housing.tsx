import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  HousingContent,
  HousingContentBloc,
  HousingDropdowns,
  HousingHeader,
  HousingHeaderButtons,
} from '../styles/Housing';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import Rating from '../components/Rating';
import housings from '../data/housings.json';
import NotFoundPage from './NotFoundPage';
import FavButton from 'components/FavButton';
import ShareButton from 'components/ShareButton';
import Loader from 'components/Loader';

type HousingData = {
  id: string;
  pictures: string[];
  title: string;
  location: string;
  tags: string[];
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  description: string;
  equipments: string[];
};

const Housing: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<HousingData | undefined>();
  const [loading, setLoading] = useState(true);
  const [isLoaded, setisLoaded] = useState<boolean | null>(null);

  useEffect(() => {
    setLoading(true);
    try {
      const housing = housings.find((h: HousingData) => h.id === id);
      if (!housing) throw new Error('Housing not found');
      setData(housing);
      setisLoaded(true);
    } catch (error) {
      console.error(error);
      setisLoaded(false);
    } finally {
      setLoading(false);
    }
  }, [id]);

  if (loading) return <Loader />;
  if (!isLoaded || !data) return <NotFoundPage />;

  return (
    <>
      <HousingHeader>
        <h1>{data.title}</h1>
        <HousingHeaderButtons>
          <ShareButton />
          <FavButton id={data.id} text={true} />
        </HousingHeaderButtons>
      </HousingHeader>

      <Carousel pictures={data.pictures} />

      <HousingContent>
        <HousingContentBloc>
          <h2>{data.location}</h2>
          <ul>
            {data.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </HousingContentBloc>

        <HousingContentBloc>
          <div>
            <span>{data.host.name}</span>
            <img src={data.host.picture} alt={`Photo de ${data.host.name}`} />
          </div>
          <Rating score={data.rating} />
        </HousingContentBloc>
      </HousingContent>

      <HousingDropdowns>
        <Dropdown heading="Description" content={<p>{data.description}</p>} />
        <Dropdown
          heading="Équipement"
          content={
            <ul>
              {data.equipments.map((equipment) => (
                <li key={equipment}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </HousingDropdowns>
    </>
  );
};

export default Housing;
