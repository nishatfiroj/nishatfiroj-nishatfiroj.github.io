import React from "react";
import { Grid } from "@mui/material";
import "../App.css";

export const Intro = () => {
  return (
    <>
      <Grid item xs={8} className="intro">
        <h1>Hi, I'm Nishat Firoj!</h1>
        <h2>DEVELOPMENT • DESIGN • DOCUMENTATION</h2>
        <h3>
          Developer of design systems and innovater of human-computer
          interactions.
        </h3>
      </Grid>
      <Grid item xs={4}></Grid>
    </>
  );
};
