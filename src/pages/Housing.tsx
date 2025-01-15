import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HousingContent, HousingContentBloc, HousingDropdowns, HousingHeader, HousingHeaderButtons } from '../styles/Housing';

// Imported components
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import Rating from '../components/Rating';
import NotFoundPage from './NotFoundPage';
import FavButton from 'components/FavButton';
import ShareButton from 'components/ShareButton';
import Loader from 'components/Loader';

// Imported housings data
import housings from '../data/housings.json';

// Type definition for housing data
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

// Housing component
const Housing: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extracting the 'id' parameter from the URL
  const [data, setData] = useState<HousingData | undefined>(); // State for storing housing data
  const [loading, setLoading] = useState(true); // State for managing the loading state
  const [isLoaded, setisLoaded] = useState<boolean | null>(null); // State for managing whether the data is loaded successfully

  // Effect hook for fetching housing data when the component mounts or 'id' changes
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

  // Show loader while data is loading
  if (loading) return <Loader />;

  // Show NotFoundPage if data is not loaded or not found
  if (!isLoaded || !data) return <NotFoundPage />;

  // Render Housing component
  return (
    <>
      <HousingHeader>
        <h1>{data.title}</h1>
        <HousingHeaderButtons>
          <ShareButton id={data.id} />
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
            <img src={data.host.picture} alt={`Photo of ${data.host.name}`} />
          </div>
          <Rating score={data.rating} />
        </HousingContentBloc>
      </HousingContent>

      <HousingDropdowns>
        <Dropdown heading="Description" content={<p>{data.description}</p>} />
        <Dropdown
          heading="Equipments"
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
