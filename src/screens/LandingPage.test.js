import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingPage from './LandingPage';

describe('LandingPage Component', () => {
  test('renders the main header text', () => {
    render(<LandingPage changeScreen={() => {}} />);
    const headerElement = screen.getByText(/Unlimited trailers, teasers and more./i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the subheader text', () => {
    render(<LandingPage changeScreen={() => {}} />);
    const subheaderElement = screen.getByText(/Your one-stop destination for the latest movie trailers and teasers./i);
    expect(subheaderElement).toBeInTheDocument();
  });

  test('calls changeScreen function when "GET STARTED" button is clicked', () => {
    const mockChangeScreen = jest.fn();
    render(<LandingPage changeScreen={mockChangeScreen} />);

    const buttonElement = screen.getByText(/GET STARTED/i);
    fireEvent.click(buttonElement);

    expect(mockChangeScreen).toHaveBeenCalledTimes(1);
    expect(mockChangeScreen).toHaveBeenCalledWith(1);
  });
});