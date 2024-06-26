import React from "react";
import Hero from "../components/Hero";
import Popular from "../components/Popular";
import NewCollections from "../components/NewCollections";
import NewsLetter from "../components/NewsLetter";
import Offer from "../components/Offer";

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <NewsLetter />
    </>
  );
};

export default Home;
