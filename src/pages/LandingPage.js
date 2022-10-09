import React from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero data={landingPage.hero} />
    </>
  );
};

export default LandingPage;
