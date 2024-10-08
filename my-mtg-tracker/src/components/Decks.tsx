import testData from './testData.json';
import { Deck } from './Deck';  

export interface DecksProps {
    deck: typeof Deck[];
}

export const Decks = () => {

    const recentDecks = testData.slice(0, 3)

    return (
        <section className="bg-orange-600 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                    Recent Decks
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {recentDecks.map((deckData) => (
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
            </div>
        </section>
    );
};