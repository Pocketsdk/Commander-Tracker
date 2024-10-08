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
 
    return(
        <div className="
            bg-gradient-to-r from-indigo-400 to-yellow-500
            hover:bg-gradient-to-l from-indigo-400 to-yellow-500
            h-56 
            rounded-xl 
            shadow-md 
            relative
        ">  
            <div className="p-4 rounded-xl">
                    <div className="mb-6" key={deck.deckID}>
                        <h1 className="text-xl font-bold">{deck.deckName}</h1>
                        <span className="absolute top-0 right-0 mt-3 mr-3 text-sm text-gray-600">v{deck.deckVersion}</span>
                        <h2 className="text-sm text-gray-600 font-bold">{deck.deckType}</h2>
                        <h3 className="text-sm text-gray-600">{deck.deckColors.join(', ')}</h3>
                        <div className="absolute bottom-0 right-0 mr-3">
                            <p className="text-sm">Win Rate {deck.winRate * 100}% | Games Played {deck.gamesPlayed}</p>
                        </div>
                    </div>
                </div>
            </div>
    );
};