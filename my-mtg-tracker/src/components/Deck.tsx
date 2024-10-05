
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
            <p>{deck.deckColors.join(', ')}</p>
            <h2>{deck.deckType}</h2>
            <span>Version {deck.deckVersion}</span>
            <p>Win Rate {deck.winRate} Games Played {deck.gamesPlayed}</p>
        </div>  
    );
};