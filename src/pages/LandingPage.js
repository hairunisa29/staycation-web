import React, { useRef, useEffect } from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

const LandingPage = () => {
  const refMostPicked = useRef();

  useEffect(() => {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Hero refMostPicked={refMostPicked} data={landingPage.hero} />
      <MostPicked refMostPicked={refMostPicked} data={landingPage.mostPicked} />
      <Categories data={landingPage.categories} />
      <Testimony data={landingPage.testimonial} />
      <Footer />
    </>
  );
};

export default LandingPage;
