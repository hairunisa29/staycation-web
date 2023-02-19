import React from "react";
import { Fade } from "react-reveal";
import Breadcrumb from "elements/Breadcrumb";

const PageDetailTitle = ({ data, breadcrumb }) => {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <hl className="h2">{data.name}</hl>
            <p className="text-gray-400">
              {data.city}, {data.country}
            </p>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
};

export default PageDetailTitle;
