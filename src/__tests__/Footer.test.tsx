import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StyledProvider from '../contexts/StyledContext';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('renders the footer text correctly', () => {
    render(
      <StyledProvider>
        <Footer />
      </StyledProvider>
    );

    // Check that the text of the footer is present
    const footerText = screen.getByText(/© 2020 Kaza\./i);
    expect(footerText).toBeInTheDocument();

    // Checks that the text is included in a paragraph
    expect(footerText.tagName).toBe('P');
  });
});
