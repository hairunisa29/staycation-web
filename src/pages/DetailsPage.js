import React, { useEffect } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import itemDetails from "json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";

const DetailsPage = () => {
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  useEffect(() => {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
      <FeaturedImage data={itemDetails.imageUrls} />
      <section className="container">
        <div className="row">
          <div className="col-7 pr-5">
            <PageDetailDescription data={itemDetails} />
          </div>
          <div className="col-5">
            <BookingForm itemDetails={itemDetails} />
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
