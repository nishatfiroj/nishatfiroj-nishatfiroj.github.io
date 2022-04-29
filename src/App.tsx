import { Grid } from "@mui/material";
import "./App.css";
import * as Sections from "./sections";

function App() {
  return (
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
}

export default App;
