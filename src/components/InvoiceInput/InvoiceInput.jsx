import React from "react";
import Grid from "@material-ui/core/Grid";

import "./InvoiceInput.css";

const InvoiceInput = () => {
  return (
    <Grid item xs={6}>
      <label className="invoice-input-label">Invoice #</label>
      <input type="text" id="invoice-number" />
    </Grid>
  );
};

export default InvoiceInput;
