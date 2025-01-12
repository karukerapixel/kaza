import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

// Mock du logo pour éviter les erreurs d'import
jest.mock('../assets/logo.png', () => 'mock-logo.png');

describe('Header Component', () => {
  test('renders the logo with correct attributes', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Vérifie que l'image du logo est affichée avec les bons attributs
    const logoElement = screen.getByRole('img', { name: /logo du site/i });
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', 'mock-logo.png');
  });

  test('renders a link that navigates to the home page', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Vérifie que le lien du logo est présent et pointe vers la page d'accueil
    const linkElement = screen.getByRole('link');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
