import Hero from "../components/Hero.jsx";
import DeckCards from "../components/DeckCards.jsx";

const HomePage = () => {
  return (
    <>
      <Hero />
      <DeckCards isHome={true} />
    </>
  );
};

export default HomePage;
