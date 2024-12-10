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
