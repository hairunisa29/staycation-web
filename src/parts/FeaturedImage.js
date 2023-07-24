import React from "react";
import { Fade } from "react-reveal";
import { useMediaQuery } from "react-responsive";

const FeaturedImage = ({ data }) => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  return (
    <section className="container">
      <div className="container-grid sm">
        {data?.map((item, index) => (
          <div
            key={`FeaturedImage-${index}`}
            className={`item ${
              isMobile ? "column-12" : `${index > 0 ? "column-5" : "column-7"}`
            }  ${index > 0 ? "row-1" : "row-2"}`}
          >
            <Fade bottom delay={300 * index}>
              <div className="card h-100">
                <figure className="img-wrapper">
                  <img
                    src={`${process.env.REACT_APP_BACKEND_HOST}/${item.imageUrl}`}
                    alt={item._id}
                    className="img-cover"
                  />
                </figure>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedImage;
