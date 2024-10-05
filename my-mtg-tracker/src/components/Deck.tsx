
interface DeckProps {
    deckID: number,
    deckName: string,
    deckType: string,
    deckColors: string[],
    deckVersion: number,
    winRate: number,
    gamesPlayed: number
}

export const Deck = (deck: DeckProps) => {
    
    return (
        <div key={deck.deckID}>
        <h1>{deck.deckName}</h1>
        <h2>{deck.deckType}</h2>
        <h2>{deck.deckColors.join(', ')}</h2>
        <h2>{deck.deckVersion}</h2>
        <h2>{deck.winRate}</h2>
        <h2>{deck.gamesPlayed}</h2>
        </div>  
    );
}   