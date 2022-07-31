import { Grid, Button } from "@mui/material"
import { Route, Routes, Outlet, NavLink } from "react-router-dom"
import "./App.css"
import * as Section from "./sections"

// icons
import CallMadeIcon from "@mui/icons-material/CallMade"

const Home = () => {
  return (
    <Grid
      container
      padding={4}
      maxWidth="700px"
      paddingTop={8}
      spacing={6}
      direction="column"
    >
      <Grid
        container
        item
        className="home"
        style={{ textAlign: "center", fontSize: 18 }}
      >
        Developer of design systems and innovater of human-computer
        interactions. React enthusiast and prototyping fanatic. Enjoyer of
        fettuccine pasta.
      </Grid>

      <Grid container item justifyContent="space-evenly" spacing={8}>
        <Grid xs={4} item style={{ textAlign: "center" }}>
          <h1>
            <b>6+</b>
          </h1>
          <p>years of coding experience</p>
        </Grid>
        <Grid xs={4} item style={{ textAlign: "center" }}>
          <h1>
            <b>100k+</b>
          </h1>
          <p>custom component insertions</p>
        </Grid>
        <Grid xs={4} item style={{ textAlign: "center" }}>
          <h1>
            <b>100+</b>
          </h1>
          <p>hours of development work saved</p>
        </Grid>
      </Grid>

      <Grid container item justifyContent="space-evenly" marginTop={4}>
        <Button
          variant="contained"
          disableElevation
          sx={{
            textDecoration: "none",
            textTransform: "none",
            color: "white",
            width: "115px",
          }}
          href="https://github.com/nishatfiroj"
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <b>Projects</b>
            <CallMadeIcon sx={{ fontSize: 16, paddingBottom: "2px" }} />
          </Grid>
        </Button>
        <Button
          variant="contained"
          disableElevation
          sx={{
            textDecoration: "none",
            textTransform: "none",
            color: "white",
            width: "115px",
          }}
          href="https://www.linkedin.com/in/nishatfiroj/"
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <b>Connect</b>
            <CallMadeIcon sx={{ fontSize: 16, paddingBottom: "2px" }} />
          </Grid>
        </Button>
      </Grid>
    </Grid>
  )
}

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
          <NavLink to="/" style={{ textDecoration: "none", color: "#1a1a1a" }}>
            <h1>Hi! I'm Nishat Firoj!</h1>
          </NavLink>
          <h2>DEVELOPMENT • DESIGN • DOCUMENTATION</h2>
        </Grid>

        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          paddingTop={8}
          paddingRight={8}
          paddingLeft={8}
          paddingBottom={2}
        >
          <Grid item padding={1}>
            <NavLink className="link" to="/about">
              About
            </NavLink>
          </Grid>
          <Grid item padding={1}>
            <NavLink className="link" to="/skills">
              Skills
            </NavLink>
          </Grid>
          <Grid item padding={1}>
            <NavLink className="link" to="/projects">
              Projects
            </NavLink>
          </Grid>
          <Grid item padding={1}>
            <NavLink className="link" to="/design-systems">
              Design systems
            </NavLink>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item direction="column">
        <Outlet />
      </Grid>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Section.About />} />
        <Route path="skills" element={<Section.Skills />} />
        <Route path="design-systems" element={<Section.DesignSystems />} />
        <Route path="projects" element={<Section.Projects />} />
      </Routes>
    </Grid>
  )
}

export default App
