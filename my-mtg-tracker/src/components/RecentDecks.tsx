import testData from "./testData.json";
import { Deck } from "./Deck";
import { Link } from "react-router-dom";

export interface DecksProps {
  deck: (typeof Deck)[];
}

const RecentDecks = () => {
  const recentDecks = testData.slice(0, 3);

  return (
    <section className="bg-orange-500 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Recent Decks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentDecks.map((deckData) => (
            <Link to={`/deckdetail/${deckData.deckID}`} key={deckData.deckID}>
              <Deck
                deckID={deckData.deckID}
                deckName={deckData.deckName}
                deckType={deckData.deckType}
                deckColors={deckData.deckColors}
                deckVersion={deckData.deckVersion}
                winRate={deckData.winRate}
                gamesPlayed={deckData.gamesPlayed}
                imgArtCrop={deckData.imgArtCrop}
                imgCard={deckData.imgCard}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentDecks;
