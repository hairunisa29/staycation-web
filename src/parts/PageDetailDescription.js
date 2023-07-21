import React from "react";
import ReactHtmlParser from "react-html-parser";
import "assets/scss/pagedetaildesription.scss"

const PageDetailDescription = ({ data }) => {
  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(data?.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data?.featureId.map((feature, index) => (
          <div
            key={`feature-${index}`}
            className="col-3"
            style={{ marginBottom: 20 }}
          >
            <img
              src={`${process.env.REACT_APP_BACKEND_HOST}/${feature.imageUrl}`}
              alt={feature.name}
              className="d-block mb-2"
              width={38}
            />
            <span>{feature.qty}</span>
            <span className="text-gray-500 font-weight-light">
              {feature.name}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PageDetailDescription;
