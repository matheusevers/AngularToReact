import React from "react";
import Grid from "@material-ui/core/Grid";
import logo from "../../../assets/metaware_logo.png";

import "./LogoDisplay.css";

const LogoDisplay = () => {
  return (
    <Grid item xs={6} className="logo-display-grid">
      <img
        id="company_logo"
        src={logo}
        alt="your image"
        className="logo-image"
      />
      <div className="noPrint">
        <a className="edit-logo-link" href="#">
          Edit Logo
        </a>
        <a id="remove_logo" href="#">
          Hide logo
        </a>
      </div>
    </Grid>
  );
};

export default LogoDisplay;
