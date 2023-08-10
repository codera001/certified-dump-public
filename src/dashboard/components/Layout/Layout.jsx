import React from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";
import "../../../App.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <Nav />
        <Sidebar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
