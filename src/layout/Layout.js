import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ScrollToTop from "../styles/GlobalComponents/ScrollUp";

import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <ScrollToTop />
      <main style={{ maxWidth: "1280px", width: "100%", margin: "auto" }}>
        {children}
      </main>
    </Container>
  );
};
