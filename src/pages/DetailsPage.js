import React, { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { useParams } from "react-router-dom";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Activities from "parts/Activities";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";
import useRegularHooks from "hooks/useRegularHooks";
import { checkoutBooking } from "store/actions/checkoutAction";
import { fetchPage } from "store/actions/pageAction";
import ReactLoading from "react-loading";

const DetailsPage = () => {
  const breadcrumb = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const { dispatch, reduxState } = useRegularHooks();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const itemDetails = reduxState.page[id] ?? null;

  const fetchData = async () => {
    setLoading(true);
    document.title = "Staycation | Details Page";
    window.scrollTo(0, 0);
    await dispatch(fetchPage(`/detail-page/${id}`, id));
    setLoading(false);
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    if (!itemDetails) {
      fetchData();
    }
  }, [id]);

  return (
    <>
      <Header />
      {loading ? (
        <div className="d-flex justify-content-center mb-2">
          <ReactLoading type="spin" color="#bbc1c9" height={45} width={45} />
        </div>
      ) : (
        <>
          <PageDetailTitle breadcrumb={breadcrumb} data={itemDetails} />
          <FeaturedImage data={itemDetails?.imageId} />
          <section className="container">
            <div className="row">
              <div className="col-7 pr-5">
                <Fade bottom>
                  <PageDetailDescription data={itemDetails} />
                </Fade>
              </div>
              <div className="col-5" style={{ zIndex: 5 }}>
                <Fade bottom>
                  <BookingForm
                    itemDetails={itemDetails}
                    startBooking={checkoutBooking}
                  />
                </Fade>
              </div>
            </div>
          </section>
          <Activities data={itemDetails?.activityId} />
          <Testimony data={itemDetails?.testimonial} />
        </>
      )}

      <Footer />
    </>
  );
};

export default DetailsPage;
