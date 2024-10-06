import { Deck } from '../Deck';
import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import '@testing-library/jest-dom';

describe('Deck', () => {
    beforeEach(() =>
        render(<Deck deckID={1} deckName={"testDeck1"} deckType={"testType1"} deckColors={["TestColour"]} deckVersion={1} winRate={1} gamesPlayed={1} />)
    );
    test('renders deck name', () => {
        const deckName = screen.getByText(/testDeck1/i);
        expect(deckName).toBeDefined();  
    });
    test('renders deck type', () => {
        const deckType = screen.getByText(/testType1/i);
        expect(deckType).toBeDefined();  
    });
    test('renders deck colors', () => {
        const deckColors = screen.getByText(/TestColour/i);
        expect(deckColors).toBeDefined();  
    });
    test('renders deck version', () => {
        const deckVersion = screen.getByText(/Version 1/i);
        expect(deckVersion).toBeDefined();  
    });
    test('renders deck win rate', () => {
        const deckWinRate = screen.getByText(/Win Rate 1/i);
        expect(deckWinRate).toBeDefined();  
    });
    test('renders deck games played', () => {
        const deckGamesPlayed = screen.getByText(/Games Played 1/i);
        expect(deckGamesPlayed).toBeDefined();  
    });
});
