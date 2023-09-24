import React from "react";
import NavigationBar from "./Navigation bar/NavigationBar";
import PageFooter from "./PageFooter/PageFooter";

const PublicLayout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <>{children}</>
      <PageFooter />
    </>
  );
};

export default PublicLayout;
