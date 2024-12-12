import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignupScreen from './SignupScreen'; // Assuming SignupScreen is in the same directory

describe('SignupScreen Component', () => {
  it('renders the Create Account button text', () => {
    render(<SignupScreen changeScreen={() => {}} />);

    const titleElement = screen.getByText(/Create Account/i);
    expect(titleElement).toBeInTheDocument();
  });
});