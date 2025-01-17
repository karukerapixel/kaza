import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { HousingContent, HousingContentBloc, HousingDropdowns, HousingHeader, HousingHeaderButtons, HousingHeaderMenu } from '../styles/Housing';

// Imported components
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import Rating from '../components/Rating';
import NotFoundPage from './NotFoundPage';
import FavButton from 'components/FavButton';
import ShareButton from 'components/ShareButton';
import Loader from 'components/Loader';

// Imported housings data
import { collection, getDocs } from 'firebase/firestore';
import { firebaseDB } from 'config/firebase';

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
  const { id } = useParams<{ id: string }>();
  const [data, setData] = useState<HousingData | null>(null);
  const [loading, setLoading] = useState(true);

  const housingsCollectionRef = collection(firebaseDB, 'housings');

  useEffect(() => {
    const fetchHousingData = async () => {
      try {
        // Fetch Firebase housings
        const request = await getDocs(housingsCollectionRef);
        const data = request.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        })) as HousingData[];

        // Combine local and Firebase housings
        const housingsDB = [...data];

        // Find the housing by ID
        const housing = housingsDB.find((h) => h.id === id);

        if (!housing) throw new Error('Housing not found');

        setData(housing);
      } catch (error) {
        console.error(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchHousingData();
  }, [id, housingsCollectionRef]);

  if (loading) return <Loader />;
  if (!data) return <NotFoundPage />;

  return (
    <>
      <HousingHeader>
        <h1>{data.title}</h1>
        <HousingHeaderButtons>
          <ShareButton id={data?.id} />
          <FavButton id={data?.id} text={true} />
        </HousingHeaderButtons>
      </HousingHeader>

      <Carousel pictures={data?.pictures || []} />

      <HousingContent>
        <HousingContentBloc>
          <h2>{data?.location}</h2>
          <ul>{data?.tags?.map((tag) => <li key={tag}>{tag}</li>) || <p>No tags available</p>}</ul>
        </HousingContentBloc>

        <HousingContentBloc>
          <div>
            <span>{data.host.name}</span>
            <img src={data.host.picture} alt={`Photo of ${data.host.name}`} />
          </div>
          <Rating score={data?.rating || '0'} />
        </HousingContentBloc>
      </HousingContent>

      <HousingDropdowns>
        <Dropdown heading="Description" content={<p>{data?.description}</p>} />
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
