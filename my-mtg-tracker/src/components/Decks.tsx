import testData from './testData.json';
import { Deck } from './Deck';  

export interface DecksProps {
    deck: typeof Deck[];
}

export const Decks = () => {
    return (
        <div>
            {testData.data.map((deckData) => (
            <Deck 
                deckID={deckData.deckID}
                deckName={deckData.deckName}
                deckType={deckData.deckType}
                deckColors={deckData.deckColors}
                deckVersion={deckData.deckVersion}
                winRate={deckData.winRate}
                gamesPlayed={deckData.gamesPlayed}
            />
            ))}
        </div>
    );
};