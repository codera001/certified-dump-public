import React from "react";
import NavigationBar from "./Navigation bar/NavigationBar";
import PageFooter from "./PageFooter/PageFooter";
import ScrollToTop from "./ScrollToTop";

const PublicLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <>{children}</>
      <ScrollToTop />
      <PageFooter />
    </>
  );
};

export default PublicLayout;
