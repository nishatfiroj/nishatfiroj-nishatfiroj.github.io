import { Grid, Tooltip } from "@mui/material";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import * as Sections from "./sections";
import { GrowthAcrossDS } from "./sections/design-systems/development";

const Home = (
  <Grid
    container
    alignItems="center"
    justifyContent="center"
    direction="column"
    className="container"
    spacing={28}
    padding={8}
  >
    <Grid item>
      <Sections.Intro />
    </Grid>
    <Grid item>
      <Sections.WhatIDo />
    </Grid>
    <Grid item>
      <Sections.DesignSystems />
    </Grid>
    <Grid item>
      <Sections.Projects />
    </Grid>
  </Grid>
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="GrowthAcrossDS" element={<GrowthAcrossDS />} />
      </Routes>
    </>
  );
}

export default App;
