import { Grid } from "@mui/material"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import * as Sections from "./sections"
import { Design } from "./sections/design-systems/design"
import { Development } from "./sections/design-systems/development"
import { Documentation } from "./sections/design-systems/documentation"

const Home = (
  <Grid
    container
    alignItems="center"
    justifyContent="center"
    direction="column"
    className="container"
    spacing={28}
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
)

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="Development" element={<Development />} />
        <Route path="Design" element={<Design />} />
        <Route path="Documentation" element={<Documentation />} />
      </Routes>
    </>
  )
}

export default App
