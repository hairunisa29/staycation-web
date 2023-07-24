import React from "react";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";
import "assets/scss/mostpicked.scss";
import Button from "elements/Button";

const MostPicked = (props) => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props?.data?.map((item, index) => {
            return (
              <div
                key={`mostpicked-${index}`}
                className={`item ${isMobile ? "column-12" : "column-4"} ${
                  index === 0 ? "row-2" : "row-1"
                }`}
              >
                <Fade bottom delay={500 * index}>
                  <div className="card card-featured">
                    <div className="tag">
                      ${item.price}
                      <span className="font-weight-light">per {item.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={
                          item.imageId[0]
                            ? `${process.env.REACT_APP_BACKEND_HOST}/${item.imageId[0].imageUrl}`
                            : ""
                        }
                        alt={item.title}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        type="link"
                        className="stretched-link d-block text-white"
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.title}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
};

export default MostPicked;
