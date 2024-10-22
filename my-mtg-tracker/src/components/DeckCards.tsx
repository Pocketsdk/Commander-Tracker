import { useEffect, useState } from "react";
import { Deck, DeckProps } from "./Deck";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const deckCards = ({ isHome = false }) => {
  const [decks, setDecks] = useState<DeckProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = isHome ? "/api/decks?_limit=3" : "/api/decks";
    const fetchDecks = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setDecks(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDecks();
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-700 to-orange-500 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          {isHome ? "Recent Decks" : "My Decks"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {decks.map((thisDeck) => (
              <Link to={`/deckdetail/${thisDeck.deckID}`} key={thisDeck.deckID}>
                <Deck
                  deckID={thisDeck.deckID}
                  deckName={thisDeck.deckName}
                  deckType={thisDeck.deckType}
                  deckColors={thisDeck.deckColors}
                  deckVersion={thisDeck.deckVersion}
                  winRate={thisDeck.winRate}
                  gamesPlayed={thisDeck.gamesPlayed}
                  imgArtCrop={thisDeck.imgArtCrop}
                  imgCard={thisDeck.imgCard}
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default deckCards;
