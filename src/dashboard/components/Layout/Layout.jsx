import React from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../../../component/Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="d-layout">
        <div className="d-inner-layout">
          <Nav />
          <Sidebar />
          <main className="d-children user-scroll">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
