import React from "react";
import { Fade } from "react-reveal";
import Breadcrumb from "elements/Breadcrumb";

const PageDetailTitle = ({ data, breadcrumb }) => {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col-12 col-lg">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-12 col-lg-auto text-center">
            <h1 className="h2">{data?.title}</h1>
            <p className="text-gray-400">
              {data?.city}, {data?.country}
            </p>
          </div>
          <div className="col-12 col-lg"></div>
        </div>
      </Fade>
    </section>
  );
};

export default PageDetailTitle;
