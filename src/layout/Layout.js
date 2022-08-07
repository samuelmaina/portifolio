import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NavDropDown from "../components/NavDropDown/index";
import ScrollToTop from "../styles/GlobalComponents/ScrollUp";

import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <main>
        <Header />
        <ScrollToTop />
        {children}
        <Footer />
      </main>
    </Container>
  );
};
