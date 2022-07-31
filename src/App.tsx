import { Grid } from "@mui/material"
import { Route, Routes, Link, Outlet } from "react-router-dom"
import "./App.css"
import * as Section from "./sections"

function App() {
  return (
    <Grid
      container
      className="container"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        container
        item
        direction="column"
        paddingTop={6}
        paddingLeft={6}
        paddingRight={6}
        className="intro"
      >
        <Grid container item direction="column" style={{ textAlign: "center" }}>
          <h1>Hi! I'm Nishat Firoj!</h1>
          <h2>DEVELOPMENT • DESIGN • DOCUMENTATION</h2>
          <h3>
            Developer of design systems and innovater of human-computer
            interactions. React enthusiast and prototyping fanatic. Enjoyer of
            fettuccine pasta.
          </h3>
        </Grid>

        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          paddingTop={8}
          paddingRight={8}
          paddingLeft={8}
          paddingBottom={2}
        >
          <Grid item padding={1}>
            <Link className="link" to="/about">
              About
            </Link>
          </Grid>
          <Grid item padding={1}>
            <Link className="link" to="/skills">
              Skills
            </Link>
          </Grid>
          <Grid item padding={1}>
            <Link className="link" to="/design-systems">
              Design systems
            </Link>
          </Grid>
          <Grid item padding={1}>
            <Link className="link" to="/projects">
              Projects
            </Link>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item direction="column">
        <Outlet />
      </Grid>

      <Routes>
        <Route path="about" element={<Section.About />} />
        <Route path="skills" element={<Section.Skills />} />
        <Route path="design-systems" element={<Section.DesignSystems />} />
        <Route path="projects" element={<Section.Projects />} />
      </Routes>
    </Grid>
  )
}

export default App
