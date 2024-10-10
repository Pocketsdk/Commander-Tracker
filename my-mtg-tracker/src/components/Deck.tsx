interface DeckProps {
  deckID: number;
  deckName: string;
  deckType: string;
  deckColors: string[];
  deckVersion: number;
  winRate: number;
  gamesPlayed: number;
  imgArtCrop: string;
  imgCard: string;
}

export const Deck = (deck: DeckProps) => {
  const deckStyle = {
    backgroundImage: `url(${deck.imgArtCrop})`,
  };

  console.log(deckStyle);

  return (
    <div
      className="
            relative 
            bg-white    
            hover:bg-gradient-to-l
                from-indigo-400
                to-yellow-500
            h-56
            rounded-xl
            shadow-md
            ovewrflow-hidden
            "
    >
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-100 rounded-xl"
        style={deckStyle}
      />
      <div className="absolute inset-0 p-4 rounded-xl opacity-100">
        <div className="mb-6" key={deck.deckID}>
          <h1 className="text-xl font-bold text-white">{deck.deckName}</h1>
          <span className="absolute top-0 right-0 mt-3 mr-3 text-sm text-white">
            v{deck.deckVersion}
          </span>
          <h2 className="text-sm text-white font-bold">{deck.deckType}</h2>
          <h3 className="text-sm text-white">{deck.deckColors.join(", ")}</h3>
          <div className="absolute bottom-0 right-0 mr-3">
            <p className="text-sm text-white">
              Win Rate {deck.winRate * 100}% | Games Played {deck.gamesPlayed}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
