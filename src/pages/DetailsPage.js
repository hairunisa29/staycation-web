import React, { useEffect } from "react";
import Fade from "react-reveal/Fade";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import itemDetails from "json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import { checkoutBooking } from "store/actions/checkoutAction";

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
            <Fade bottom>
              <PageDetailDescription data={itemDetails} />
            </Fade>
          </div>
          <div className="col-5">
            <Fade bottom>
              <BookingForm
                itemDetails={itemDetails}
                startBooking={checkoutBooking}
              />
            </Fade>
          </div>
        </div>
      </section>
      <Categories data={itemDetails.categories} />
      <Testimony data={itemDetails.testimonial} />

      <Footer />
    </>
  );
};

export default DetailsPage;
