import Hero from "../components/Hero";
import DeckCards from "../components/DeckCards";

const HomePage = () => {
  return (
    <>
      <Hero />
      <DeckCards isHome={true} />
    </>
  );
};

export default HomePage;
