import { useEffect, useState } from "react";
import { Deck, DeckProps } from "./Deck";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";

const deckCards = ({ isHome = false }) => {
  const [decks, setDecks] = useState<DeckProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [listStyle, setListStyle] = useState(true);

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
    <>
      <div className="bg-orange-500 flex justify-between space-x-6 p-4">
        <h2 className="text-3xl font-bold text-white text-center">
          {isHome ? "Recent Decks" : "My Decks"}
        </h2>
        <button
          onClick={() => setListStyle((prevState) => !prevState)}
          className="bg-orange-400 hover:bg-orange-700 text-white text-xs font-bold px-1"
        >
          {listStyle ? "View as list" : "View as cards"}
        </button>
      </div>

      {listStyle ? (
        <section className="bg-gradient-to-b from-gray-700 to-orange-500 px-4 py-10">
          <div className="container-xl lg:container m-auto">
            {loading ? (
              <Spinner loading={loading} />
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {decks.map((thisDeck) => (
                  <Link
                    to={`/deckdetail/${thisDeck.deckID}`}
                    key={thisDeck.deckID}
                  >
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
      ) : (
        <section className="bg-orange-500">
          <div className="container-xl lg:container m-auto">
            <h1 className="text-center font-bold text-2xl text-white">
              Deck List
            </h1>
            {loading ? (
              <Spinner loading={loading} />
            ) : (
              <div className="flex justify-center">
                <table className="table-auto">
                  <thead className="text-left text-md">
                    <tr>
                      <th className="pr-3">Deck Name</th>
                      <th className="pr-3">Deck Type</th>
                      <th className="pr-3">Deck Colors</th>
                      <th className="pr-3">Deck Version</th>
                      <th className="pr-3">Win Rate</th>
                      <th className="pr-3">Games Played</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-white">
                    {decks.map((deckData) => (
                      <tr
                        className="hover:bg-gradient-to-l from-yellow-500 to-cyan-600 hover:cursor-pointer"
                        key={deckData.deckID}
                        onClick={() =>
                          (window.location.href = `/deckdetail/${deckData.deckID}`)
                        }
                      >
                        <td className="font-bold pr-3">{deckData.deckName}</td>
                        <td className="pr-3">{deckData.deckType}</td>
                        <td className="pr-3">
                          {deckData.deckColors.join(", ")}
                        </td>
                        <td className="pr-3 text-center">
                          {deckData.deckVersion}
                        </td>
                        <td className="pr-3 text-center">
                          {deckData.winRate * 100}%
                        </td>
                        <td className="pr-3 text-center">
                          {deckData.gamesPlayed}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default deckCards;
