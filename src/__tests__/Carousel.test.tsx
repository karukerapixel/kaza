import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from '../components/Carousel';

jest.useFakeTimers();

const mockPictures = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

describe('Carousel Component', () => {
  test('renders fallback message when no pictures are provided', () => {
    render(<Carousel pictures={[]} />);
    expect(screen.getByText(/No images to display/i)).toBeInTheDocument();
  });

  test('renders pictures and navigation buttons', () => {
    render(<Carousel pictures={mockPictures} />);

    const firstImage = screen.getByRole('img', { name: /Slide 1/i });
    expect(firstImage).toBeInTheDocument();
    expect(firstImage).toHaveAttribute('src', 'image1.jpg');

    const prevButton = screen.getByLabelText(/Previous picture/i);
    const nextButton = screen.getByLabelText(/Next picture/i);
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('navigates to next and previous pictures', () => {
    render(<Carousel pictures={mockPictures} />);

    const nextButton = screen.getByLabelText(/Next picture/i);
    const prevButton = screen.getByLabelText(/Previous picture/i);

    // Navigate to next picture
    fireEvent.click(nextButton);
    expect(screen.getByRole('img', { name: /Slide 2/i })).toBeInTheDocument();

    // Navigate to previous picture
    fireEvent.click(prevButton);
    expect(screen.getByRole('img', { name: /Slide 1/i })).toBeInTheDocument();
  });

  test('automatically transitions pictures every 3 seconds', () => {
    render(<Carousel pictures={mockPictures} />);

    // Start on the first slide
    expect(screen.getByRole('img', { name: /Slide 1/i })).toBeInTheDocument();

    // Advance the timer
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByRole('img', { name: /Slide 2/i })).toBeInTheDocument();

    // Advance the timer again
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByRole('img', { name: /Slide 3/i })).toBeInTheDocument();
  });

  test('pauses and resumes automatic slideshow on mouse events', () => {
    render(<Carousel pictures={mockPictures} />);
    const carouselRegion = screen.getByRole('region');

    // Pause on mouse enter
    fireEvent.mouseEnter(carouselRegion);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByRole('img', { name: /Slide 1/i })).toBeInTheDocument(); // No change

    // Resume on mouse leave
    fireEvent.mouseLeave(carouselRegion);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(screen.getByRole('img', { name: /Slide 2/i })).toBeInTheDocument();
  });
});
