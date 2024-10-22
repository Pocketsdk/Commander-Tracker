import testData from "./testData.json";
import { Link } from "react-router-dom";

const DeckList = () => {
  const deckList = testData;
  console.log(deckList);

  return (
    <section className="bg-gradient-to-b from-orange-500 to-gray-600">
      <div className="container-xl lg:container m-auto">
        <h1 className="text-center font-bold text-2xl text-white">Deck List</h1>
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
              {deckList.map((deckData) => (
                <tr
                  className="hover:bg-gradient-to-l from-yellow-500 to-cyan-600 hover:cursor-pointer"
                  key={deckData.deckID}
                  onClick={() =>
                    (window.location.href = `/deckdetail/${deckData.deckID}`)
                  }
                >
                  <td className="font-bold pr-3">{deckData.deckName}</td>
                  <td className="pr-3">{deckData.deckType}</td>
                  <td className="pr-3">{deckData.deckColors.join(", ")}</td>
                  <td className="pr-3 text-center">{deckData.deckVersion}</td>
                  <td className="pr-3 text-center">
                    {deckData.winRate * 100}%
                  </td>
                  <td className="pr-3 text-center">{deckData.gamesPlayed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DeckList;
