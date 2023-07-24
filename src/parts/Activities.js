import React from "react";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";
import Button from "elements/Button";

const Activities = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  return (
    <section className="container">
      <Fade bottom>
        <h4 className="mb-3 font-weight-medium">Treasure to Choose</h4>
        <div className="container-grid">
          {data?.map((activity, index) => (
            <div
              className={`item ${isMobile ? "column-12" : "column-3"} row-1`}
              key={`activity-${index}`}
            >
              <Fade bottom delay={300 * index}>
                <div className="card">
                  {activity.isPopular && (
                    <div className="tag">
                      Popular <span className="font-weight-light">Choice</span>
                    </div>
                  )}
                  <figure className="img-wrapper" style={{ height: 180 }}>
                    <img
                      src={
                        activity.imageUrl
                          ? `${process.env.REACT_APP_BACKEND_HOST}/${activity.imageUrl}`
                          : ""
                      }
                      alt={activity.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      href={`/properties/${activity._id}`}
                      className="stretched-link d-block text-gray-800"
                    >
                      <h5 className="h4">{activity.name}</h5>
                      <span className="text-gray-500">{activity.type}</span>
                    </Button>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Activities;
