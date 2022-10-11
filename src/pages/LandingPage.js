import React, { useRef } from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

const LandingPage = () => {
  const refMostPicked = useRef();
  return (
    <>
      <Header />
      <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
    </>
  );
};

export default LandingPage;
