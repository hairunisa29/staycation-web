import React from "react";
import Fade from "react-reveal/Fade";
import ImageHero from "assets/images/img-hero.jpg";
import ImageHeroFrame from "assets/images/img-hero-frame.jpg";
import IconTraveler from "assets/images/icons/icon-traveler.svg";
import IconCities from "assets/images/icons/icon-cities.svg";
import IconTreasure from "assets/images/icons/icon-treasure.svg";
import Button from "elements/Button";
import "assets/scss/hero.scss";
import { formatNumber } from "utils/formatter";

const Hero = (props) => {
  const onClickShowMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };

  return (
    <Fade bottom>
      <section className="container hero pt-4">
        <div className="row align-items-center">
          <div className="col-lg-6 col-sm-12 pr-5">
            <h1 className="font-weight-bold mb-3">
              Forget Busy Work, <br />
              Start Next Vacation
            </h1>
            <p
              className="mb-4 font-weight-light w-75"
              style={{ lineHeight: "170%" }}
            >
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className="btn px-5"
              hasShadow
              isPrimary
              onClick={onClickShowMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row" style={{ marginTop: "80px" }}>
              <div className="col">
                <img
                  src={IconTraveler}
                  alt={`${props?.data?.travelers} travelers`}
                  width="35"
                  height="35"
                />
                <h6 className="mt-3">
                  {formatNumber(props?.data?.travelers)} <span>Travelers</span>
                </h6>
              </div>
              <div className="col">
                <img
                  src={IconTreasure}
                  alt={`${props?.data?.treasures} treasures`}
                  width="35"
                  height="35"
                />
                <h6 className="mt-3">
                  {formatNumber(props?.data?.treasures)} <span>Treasures</span>
                </h6>
              </div>
              <div className="col">
                <img
                  src={IconCities}
                  alt={`${props?.data?.cities} cities`}
                  width="36"
                  height="36"
                />
                <h6 className="mt-3">
                  {formatNumber(props?.data?.cities)} <span>Cities</span>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-12 pl-6">
            <div className="img-hero">
              <img
                src={ImageHero}
                alt="Room with Couchces"
                className="img-fluid position-absolute"
                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
              />
              <img
                src={ImageHeroFrame}
                alt="Room with Couchces Frame"
                className="img-fluid position-absolute"
                style={{ margin: "0 -15px -15px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Hero;
