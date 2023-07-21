import React, { useRef, useEffect, useState } from "react";
import Header from "parts/Header";
// import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import useRegularHooks from "hooks/useRegularHooks";
import { fetchPage } from "store/actions/pageAction";
import ReactLoading from "react-loading";

const LandingPage = () => {
  const refMostPicked = useRef();
  const { dispatch, reduxState } = useRegularHooks();
  const [loading, setLoading] = useState(false);

  const landingPage = reduxState.page.landingPage ?? null;

  const fetchData = async () => {
    setLoading(true);
    document.title = "Staycation | Home";
    window.scrollTo(0, 0);
    await dispatch(
      fetchPage(
        `${process.env.REACT_APP_BACKEND_HOST}/api/v1/member/landing-page`,
        "landingPage"
      )
    );
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header />
      {loading ? (
        <div className="d-flex justify-content-center">
          <ReactLoading
            type="spin"
            color="#bbc1c9"
            height={45}
            width={45}
          />
        </div>
      ) : (
        <>
          <Hero refMostPicked={refMostPicked} data={landingPage?.hero} />
          <MostPicked
            refMostPicked={refMostPicked}
            data={landingPage?.mostPicked}
          />
          <Categories data={landingPage?.category} />
          <Testimony data={landingPage?.testimonial} />
        </>
      )}
      <Footer />
    </>
  );
};

export default LandingPage;
