import React from "react";
import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        {/* <Nav /> */}
        {/* some texts */}
        <div className="inner-layout">
          <Sidebar />
          <Nav />
          <div className="inner">
            {/* <Sidebar /> */}
            <main className="children user-scroll">{children}</main>
          </div>
        </div>
        <Footer />
        </div>
   </>
  );
};

      export default Layout;
