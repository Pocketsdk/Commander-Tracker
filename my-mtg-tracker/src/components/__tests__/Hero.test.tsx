import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Hero from '../Hero';
import '@testing-library/jest-dom';

describe('Hero', () => {
    test('renders correctly', () => {
        render(<Hero />);
        const heroElement = screen.getByRole('heading', { name: /My MTG Tracker/i });
        expect(heroElement).toBeDefined();
    });
});
