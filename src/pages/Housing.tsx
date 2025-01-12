import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  HousingContent,
  HousingContentBloc,
  HousingDropdowns,
  HousingHeader,
} from '../styles/Housing';
import Carousel from '../components/Carousel';
import Dropdown from '../components/Dropdown';
import Rating from '../components/Rating';
import housings from '../data/housings.json';
import Error from './NotFoundPage';

// Define the structure of a housing object
interface HousingData {
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
}

const Housing: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the housing ID from the route
  const [data, setData] = useState<HousingData | undefined>(); // State to store housing data

  // Fetch housing data based on the ID
  useEffect(() => {
    const housing = housings.find((h: HousingData) => h.id === id); // Find the housing by ID
    setData(housing); // Update the state with the housing data
  }, [id]); // Effect runs whenever `id` changes

  // Display a message if no housing is found
  if (!data) {
    return <Error />;
  }

  return (
    <>
      <HousingHeader>
        <h1>{data.title}</h1>
      </HousingHeader>

      <Carousel pictures={data.pictures} />

      <HousingContent>
        <HousingContentBloc>
          <h2>{data.location}</h2>
          <ul>
            {data.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </HousingContentBloc>

        <HousingContentBloc style={{ alignItems: 'end' }}>
          <div>
            <span>{data.host.name}</span>
            <img src={data.host.picture} alt={`profil de ${data.host.name}`} />
          </div>
          <Rating score={data.rating} />
        </HousingContentBloc>
      </HousingContent>

      <HousingDropdowns>
        <Dropdown heading={'description'} content={<p>{data.description}</p>} />
        <Dropdown
          heading={'équipement'}
          content={
            <ul>
              {data.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </HousingDropdowns>
    </>
  );
};

export default Housing;
