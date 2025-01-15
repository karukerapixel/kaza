import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loader from '../components/Loader';

jest.mock('styles/Loader', () => ({
  LoaderWrapper: jest.fn(({ children }) => <div data-testid="loader-wrapper">{children}</div>),
  LoaderSpinner: jest.fn(() => <div data-testid="loader-spinner" />),
}));

describe('Loader Component', () => {
  it('renders the loader wrapper and spinner', () => {
    render(<Loader />);

    // Vérifie que le wrapper est présent
    expect(screen.getByTestId('loader-wrapper')).toBeInTheDocument();

    // Vérifie que le spinner est présent
    expect(screen.getByTestId('loader-spinner')).toBeInTheDocument();
  });
});
