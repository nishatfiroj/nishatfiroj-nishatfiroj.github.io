import React from "react";
import { Grid } from "@mui/material";
import "../App.css";
import { Card } from "../components";

export const DesignSystems = () => {
  return (
    <Grid container className="section" justifyContent="center">
      <h2>Design Systems</h2>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={4}>
          <Card title="Developing and deploying components">
            <p>
              Across the three iterations of design systems I've worked on, from
              my time as an intern to a level 2 engineer at NCR, I've tested,
              built, and modified new and existing React components.
            </p>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card title="Critiquing and validating designs">
            <p>
              From building Figma plugins to assist and validate design efforts
              of my peers to participating in design and accessibility reviews,
              I was an active participant in the evolution of components, from
              creation to production.
            </p>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card title="Documenting implementation and behaviors">
            <p>
              I've documented and audited the design system of most major
              companies and have compared them to the NCR design system to
              better understand where our successes and downfalls are.{" "}
            </p>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
