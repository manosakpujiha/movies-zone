import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import '@testing-library/jest-dom';
import Nav from './Nav';

const mockStore = configureStore([]);

describe('Nav Component', () => {
    test('renders with fallback username when user is undefined', () => {
        const store = mockStore({
            user: { user: null },
        });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Nav />
                </MemoryRouter>
            </Provider>
        );

        const fallbackText = screen.getByText(/Guest/i);
        expect(fallbackText).toBeInTheDocument();

        const logoElement = screen.getByAltText('logo');
        expect(logoElement).toBeInTheDocument();

        const avatarElement = screen.getByAltText('avatar');
        expect(avatarElement).toBeInTheDocument();
    });

    test('renders with the correct user email when user is defined', () => {
        const store = mockStore({
            user: { user: { email: 'testuser@example.com' } },
        });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Nav />
                </MemoryRouter>
            </Provider>
        );

        const userEmail = screen.getByText(/testuser@example.com/i);
        expect(userEmail).toBeInTheDocument();
    });

    test('applies "nav__black" class when show is true', () => {
        const store = mockStore({
            user: { user: { email: 'testuser@example.com' } },
        });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Nav />
                </MemoryRouter>
            </Provider>
        );

        const navElement = screen.getByRole('banner');
        expect(navElement).toHaveClass('nav');
    });

    test('logo is clickable and navigates to the home page', () => {
        const store = mockStore({
            user: { user: { email: 'testuser@example.com' } },
        });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Nav />
                </MemoryRouter>
            </Provider>
        );

        const logoElement = screen.getByAltText('logo');
        expect(logoElement).toHaveAttribute('src', 'MoviesZoneLogo.png');
    });

    test('avatar is clickable and navigates to the profile page', () => {
        const store = mockStore({
            user: { user: { email: 'testuser@example.com' } },
        });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Nav />
                </MemoryRouter>
            </Provider>
        );

        const avatarElement = screen.getByAltText('avatar');
        expect(avatarElement).toHaveAttribute('src', 'user emojipng.com-11281132.png');
    });

    test('displays nav__black class when scrolled past threshold', () => {
        const store = mockStore({
            user: { user: { email: 'testuser@example.com' } },
        });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Nav />
                </MemoryRouter>
            </Provider>
        );

        const navElement = screen.getByRole('banner');
        expect(navElement.className).toContain('nav');
    });

    test('renders navigation bar with logo, avatar, and user details', () => {
        const store = mockStore({
            user: { user: { email: 'testuser@example.com' } },
        });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Nav />
                </MemoryRouter>
            </Provider>
        );

        const logoElement = screen.getByAltText('logo');
        const avatarElement = screen.getByAltText('avatar');
        const userEmail = screen.getByText(/testuser@example.com/i);

        expect(logoElement).toBeInTheDocument();
        expect(avatarElement).toBeInTheDocument();
        expect(userEmail).toBeInTheDocument();
    });
});
