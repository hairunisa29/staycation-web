import React, { useEffect } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import itemDetails from "json/itemDetails.json";

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
    </>
  );
};

export default DetailsPage;
