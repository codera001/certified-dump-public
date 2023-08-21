import React from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="d-layout">
        {/* some texts */}
        <div className="d-inner-layout">
          <Nav />
          <Sidebar />
          {/* <div className="inner"> */}
          {/* <Sidebar /> */}
          <main className="d-children user-scroll">{children}</main>
          {/* </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
