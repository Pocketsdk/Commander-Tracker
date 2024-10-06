import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Header from '../Header';
import '@testing-library/jest-dom';

describe('Header', () => {
    test('renders correctly', () => {
        render(<Header />);
        const headerElement = screen.getByRole('heading', { name: /My MTG Tracker/i });
        expect(headerElement).toBeDefined();
    });
});
