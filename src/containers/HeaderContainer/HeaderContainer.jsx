import React from "react";

import Header from "../../components/Header/Header.jsx";
import InvoiceInput from "../../components/InvoiceInput/InvoiceInput.jsx";
import LogoDisplay from "../../components/LogoDisplay/LogoDisplay.jsx";

import Grid from "@material-ui/core/Grid";

import "./HeaderContainer.css";

const HeaderContainer = () => {
  return (
    <Grid container spacing={3} className="header-container-grid">
      <Header />
      <InvoiceInput />
      <LogoDisplay />
    </Grid>
  );
};

export default HeaderContainer;
