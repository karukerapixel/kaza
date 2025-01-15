import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../components/Button';

describe('Button Component', () => {
  it('renders the button with an icon and optional text', () => {
    render(<Button ariaLabel="test-button" icon={<span data-testid="icon">Icon</span>} text="Click Me" />);

    // Vérifie que l'icône est rendue
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    // Vérifie que le texte est rendu
    expect(screen.getByText('Click Me')).toBeInTheDocument();
    // Vérifie que l'attribut aria-label est appliqué
    expect(screen.getByRole('button', { name: 'test-button' })).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button ariaLabel="clickable-button" icon={<span>Icon</span>} onClick={handleClick} />);

    const button = screen.getByRole('button', { name: 'clickable-button' });
    fireEvent.click(button);

    // Vérifie que la fonction onClick est appelée
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies custom styles passed via props', () => {
    const customStyle = { backgroundColor: 'red' };
    render(<Button ariaLabel="styled-button" icon={<span>Icon</span>} style={customStyle} />);

    const button = screen.getByRole('button', { name: 'styled-button' });
    // Vérifie que le style est appliqué
    expect(button).toHaveStyle('background-color: red');
  });
});
