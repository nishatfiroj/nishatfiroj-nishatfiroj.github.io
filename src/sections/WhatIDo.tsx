import React from "react";
import { Grid } from "@mui/material";
import "../App.css";
import { Card } from "../components";

export const WhatIDo = () => {
  return (
    <Grid container className="section" direction="column" spacing={8}>
      <Grid item>
        <h2>WHAT I DO</h2>
        <p>
          After graduating from Georgia Tech with a Bachelor's in Computer
          Science, I began my work as a frontend software engineer at NCR
          working to develop the company's design system. I used different
          frameworks, languages, and API's to design, develop, and document
          different components and patterns.
        </p>
      </Grid>
      <Grid container item>
        <h4>Design Systems</h4>
        <p>
          My work over the course of the past two years has centered around
          design system components and patterns at NCR. I've developed,
          designed, and documented components and patterns that have thousands
          of implementations across the company.
        </p>

        <Grid container direction="row" spacing={2}>
          <Card title="Developing and deploying components">
            {/* <img src={require('../assets/buttondemo.png')} /> */}
            <p>
              Across the three iterations of design systems I've worked on, from
              my time as an intern to a level 2 engineer at NCR, I've tested,
              built, and modified new and existing React components.
            </p>
          </Card>
          <Card title="Critiquing and validating designs">
            <p>
              {/* <img src={require('../assets/figma.png')} /> */}
              From building Figma plugins to assist and validate design efforts
              of my peers to participating in design and accessibility reviews,
              I was an active participant in the evolution of components, from
              creation to production.
            </p>
          </Card>
          <Card title="Documenting implementation and behaviors">
            <p>
              {/* <img src={require('../assets/documentation.png')} /> */}
              I've used my experiences from working in a communication lab at
              Georgia Tech to guide my technical writing skills. I've documented
              and audited the design system of most major companies and have
              compared them to the NCR design system to better understand where
              our successes and downfalls are. My work allows designers and
              developers in my company to proceed in their workflows in an
              educated manner that is uniform to the company and brand needs.
            </p>
          </Card>
        </Grid>
      </Grid>

      <Grid container item>
        <h4>Innovation</h4>
        <p>
          My work over the course of the past two years has centered around
          design system components and patterns at NCR. I've developed,
          designed, and documented components and patterns that have thousands
          of implementations across the company.
        </p>

        <Grid container direction="row" spacing={2}>
          <Card title="Developing and deploying components">Example 1</Card>
          <Card title="Critiquing and validating designs">Example 2</Card>
          <Card title="Documenting implementation and behaviors">
            Example 2
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
