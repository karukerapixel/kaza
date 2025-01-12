import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rating from '../components/Rating';

// Mock des assets pour éviter les erreurs d'import
jest.mock('../assets/red-star.png', () => 'red-star.png');
jest.mock('../assets/grey-star.png', () => 'grey-star.png');

describe('Rating Component', () => {
  test('renders 5 grey stars for a score of 0', () => {
    render(<Rating score="0" />);

    // Vérifie qu'il y a 5 étoiles grises
    const greyStars = screen.getAllByAltText('empty star');
    expect(greyStars).toHaveLength(5);

    // Vérifie qu'il n'y a pas d'étoiles rouges
    const redStars = screen.queryByAltText('full star');
    expect(redStars).not.toBeInTheDocument();
  });

  test('renders correct number of red and grey stars for a valid score', () => {
    render(<Rating score="3" />);

    // Vérifie qu'il y a 3 étoiles rouges
    const redStars = screen.getAllByAltText('full star');
    expect(redStars).toHaveLength(3);

    // Vérifie qu'il y a 2 étoiles grises
    const greyStars = screen.getAllByAltText('empty star');
    expect(greyStars).toHaveLength(2);
  });

  test('renders 5 red stars for a score of 5', () => {
    render(<Rating score="5" />);

    // Vérifie qu'il y a 5 étoiles rouges
    const redStars = screen.getAllByAltText('full star');
    expect(redStars).toHaveLength(5);

    // Vérifie qu'il n'y a pas d'étoiles grises
    const greyStars = screen.queryByAltText('empty star');
    expect(greyStars).not.toBeInTheDocument();
  });

  test('renders 5 grey stars for an invalid score', () => {
    render(<Rating score="invalid" />);

    // Vérifie qu'il y a 5 étoiles grises
    const greyStars = screen.getAllByAltText('empty star');
    expect(greyStars).toHaveLength(5);

    // Vérifie qu'il n'y a pas d'étoiles rouges
    const redStars = screen.queryByAltText('full star');
    expect(redStars).not.toBeInTheDocument();
  });

  test('clamps score above 5 to 5', () => {
    render(<Rating score="10" />);

    // Vérifie qu'il y a 5 étoiles rouges
    const redStars = screen.getAllByAltText('full star');
    expect(redStars).toHaveLength(5);

    // Vérifie qu'il n'y a pas d'étoiles grises
    const greyStars = screen.queryByAltText('empty star');
    expect(greyStars).not.toBeInTheDocument();
  });
});
