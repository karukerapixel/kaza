import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HousingCard from '../components/HousingCard';
import StyledProvider from 'contexts/StyledContext';

describe('HousingCard Component', () => {
  const mockProps = {
    id: '123',
    title: 'Beautiful House',
    picture: 'https://via.placeholder.com/150',
  };

  test('renders housing card with correct data', () => {
    render(
      <StyledProvider>
        <MemoryRouter>
          <HousingCard {...mockProps} />
        </MemoryRouter>
      </StyledProvider>
    );

    // Vérifie que l'image est affichée avec le bon src et alt
    const imgElement = screen.getByRole('img', { name: mockProps.title });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', mockProps.picture);

    // Vérifie que le titre est affiché correctement
    const titleElement = screen.getByRole('heading', { level: 2 });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(mockProps.title);

    // Vérifie que le lien pointe vers la bonne URL
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', `/housings/${mockProps.id}`);
  });

  test('renders without crashing when missing props', () => {
    render(
      <StyledProvider>
        <MemoryRouter>
          <HousingCard id="" title="" picture="" />
        </MemoryRouter>
      </StyledProvider>
    );

    // Vérifie qu'une image est toujours rendue, même sans contenu
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', '');
    expect(imgElement).toHaveAttribute('alt', '');

    // Vérifie que le titre est rendu vide
    const titleElement = screen.getByRole('heading', { level: 2 });
    expect(titleElement).toHaveTextContent('');

    // Vérifie que le lien fonctionne avec un id vide
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/housings/');
  });
});
