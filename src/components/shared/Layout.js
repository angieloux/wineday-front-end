import React from "react";
import Footer from "../footer/Footer";
// import Header from "../header/Header";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
