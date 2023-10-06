import React from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../../../component/Footer/Footer";
import "./Layout.css";
import ScrollToTop from "../../../component/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <div className="d-layout">
      <div className="d-inner-layout">
        <Nav />
        <Sidebar />
        <main className="d-children user-scroll">{children}</main>
      </div>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Layout;
