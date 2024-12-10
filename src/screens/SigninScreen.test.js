import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import SigninScreen from './SigninScreen';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"; // Import the correct functions

jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
  getAuth: jest.fn(),  // Mock the getAuth function as well if needed
}));

describe('SigninScreen Component', () => {
  test('renders Sign In form with fields and button', () => {
    render(<SigninScreen changeScreen={jest.fn()} />);

    // Check if the Sign In form contains input fields and button
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /SignIn/i })).toBeInTheDocument();
  });

  test('displays error alert when login fails', async () => {
    // Mock the rejected promise when signInWithEmailAndPassword fails
    signInWithEmailAndPassword.mockRejectedValue(new Error('Login failed'));
  
    // Mock window.alert to capture the alert message
    window.alert = jest.fn();
  
    render(<SigninScreen changeScreen={jest.fn()} />);
  
    // Simulate user input for email and password
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'testuser@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'wrongpassword' } });
  
    // Simulate form submission by clicking the SignIn button
    fireEvent.click(screen.getByRole('button', { name: /SignIn/i }));
  
    // Wait for the alert to be called
    await waitFor(() => {
      // Verify that alert was called with the expected error message
      expect(window.alert).toHaveBeenCalledWith('Login failed');
  });
});

  test('navigates to Sign Up screen when "Sign Up now" link is clicked', () => {
    const changeScreenMock = jest.fn();

    render(<SigninScreen changeScreen={changeScreenMock} />);

    // Simulate clicking the "Sign Up now" link
    fireEvent.click(screen.getByText(/Sign Up now/i));

    // Verify that the changeScreen function was called with the correct argument
    expect(changeScreenMock).toHaveBeenCalledWith(2);
  });
});
