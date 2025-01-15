import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import NavBar from '../components/NavBar';
import StyledProvider from 'contexts/StyledContext';

jest.mock('styles/NavBar', () => ({
  NavBarWrapper: jest.fn(({ children }) => <nav data-testid="nav-bar-wrapper">{children}</nav>),
}));

describe('NavBar Component', () => {
  it('renders the NavBar with a link to /fav-housings', () => {
    render(
      <StyledProvider>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </StyledProvider>
    );

    // Vérifie que le wrapper est rendu
    expect(screen.getByTestId('nav-bar-wrapper')).toBeInTheDocument();

    // Vérifie que le lien "Favoris" est rendu
    const link = screen.getByRole('link', { name: 'Favoris' });
    expect(link).toBeInTheDocument();

    // Vérifie que le lien pointe vers le bon chemin
    expect(link).toHaveAttribute('href', '/fav-housings');
  });
});
