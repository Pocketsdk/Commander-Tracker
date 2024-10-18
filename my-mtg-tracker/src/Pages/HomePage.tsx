import React from "react";
import Hero from "../components/Hero";
import RecentDecks from "../components/RecentDecks";
import DeckList from "../components/DeckList";

const HomePage = () => {
  return (
    <>
      <Hero />
      <RecentDecks />
      <DeckList />
    </>
  );
};

export default HomePage;
