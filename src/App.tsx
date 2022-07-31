import { Grid, Link } from "@mui/material"
import { Route, Routes, Outlet, NavLink } from "react-router-dom"
import "./App.css"
import * as Section from "./sections"

// icons
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const Home = () => {
  return (
    <Grid container padding={4} maxWidth="700px" paddingTop={8}>
      <Grid className="home" item style={{ textAlign: "center" }}>
        <h4>
          Developer of design systems and innovater of human-computer
          interactions. React enthusiast and prototyping fanatic. Enjoyer of
          fettuccine pasta.
        </h4>
        <br />
        <p>Navigate to the links below for more about me.</p>
        <br />
      </Grid>
      <Grid container justifyContent="space-evenly">
        <Link href="https://github.com/nishatfiroj">
          <GitHubIcon style={{ color: "#1a1a1a" }} sx={{ fontSize: "64px" }} />
        </Link>
        <Link href="https://www.linkedin.com/in/nishatfiroj/">
          <LinkedInIcon
            style={{ color: "#1a1a1a" }}
            sx={{ fontSize: "64px" }}
          />
        </Link>
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
