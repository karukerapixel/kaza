import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StyledProvider from '../contexts/StyledContext';
import Dropdown from '../components/Dropdown';

describe('Dropdown Component', () => {
  const mockProps = {
    heading: 'Test Heading',
    content: <p>Test Content</p>,
  };

  test('renders the dropdown with heading and no content initially', () => {
    render(
      <StyledProvider>
        <Dropdown {...mockProps} />
      </StyledProvider>
    );

    // Vérifie que le titre est affiché
    const headingElement = screen.getByRole('heading', {
      name: /Test Heading/i,
    });
    expect(headingElement).toBeInTheDocument();

    // Vérifie que le contenu n'est pas affiché au départ
    const contentElement = screen.queryByText(/Test Content/i);
    expect(contentElement).not.toBeInTheDocument();
  });

  test('displays content when clicked and hides it when clicked again', () => {
    render(
      <StyledProvider>
        <Dropdown {...mockProps} />
      </StyledProvider>
    );

    // Clic pour ouvrir le dropdown
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    // Vérifie que le contenu est affiché après le clic
    const contentElement = screen.getByText(/Test Content/i);
    expect(contentElement).toBeInTheDocument();

    // Clic pour fermer le dropdown
    fireEvent.click(buttonElement);

    // Vérifie que le contenu est caché après le deuxième clic
    expect(screen.queryByText(/Test Content/i)).not.toBeInTheDocument();
  });

  test('renders with different props correctly', () => {
    const dynamicProps = {
      heading: 'Dynamic Heading',
      content: <span>Dynamic Content</span>,
    };

    render(
      <StyledProvider>
        <Dropdown {...dynamicProps} />
      </StyledProvider>
    );

    // Vérifie que le titre dynamique est affiché
    const dynamicHeadingElement = screen.getByRole('heading', {
      name: /Dynamic Heading/i,
    });
    expect(dynamicHeadingElement).toBeInTheDocument();

    // Vérifie que le contenu dynamique est affiché après ouverture
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    const dynamicContentElement = screen.getByText(/Dynamic Content/i);
    expect(dynamicContentElement).toBeInTheDocument();
  });
});
