import { Grid, Button, ButtonBase } from "@mui/material"
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
        Bootstrapper of systems and applications, from bottom up. Developer of
        human-computer interactions. React and NextJS enthusiast. Enjoyer of
        fettuccine pasta.
      </Grid>

      <Grid container item justifyContent="space-evenly" spacing={4}>
        <Grid xs={4} item style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "28px" }}>
            <b>15+</b>
          </h1>
          <p style={{ fontSize: "14px" }}>
            successful runs of Spotify system, with artists boasting millions of
            listeners
          </p>
        </Grid>
        <Grid xs={4} item style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "28px" }}>
            <b>20k+</b>
          </h1>
          <p style={{ fontSize: "14px" }}>
            Spotify premium fans reached via project bootstrapped in 6 months
          </p>
        </Grid>
        <Grid xs={4} item style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "28px" }}>
            <b>100k+</b>
          </h1>
          <p style={{ fontSize: "14px" }}>
            custom component insertions across international retail, finance,
            and banking POS's
          </p>
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
      <Grid container item direction="column" className="intro">
        <Grid
          container
          item
          direction="column"
          style={{ textAlign: "center" }}
          padding={2}
          paddingBottom={4}
        >
          <NavLink to="/" style={{ textDecoration: "none", color: "#1a1a1a" }}>
            <h1>HI I'M NISHAT</h1>
          </NavLink>
          <h2>DEVELOPMENT • DESIGN • DOCUMENTATION</h2>
        </Grid>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            justifyContent: "space-evenly",
            paddingBottom: "1em",
          }}
        >
          <ButtonBase className="link" href="/about">
            About
          </ButtonBase>

          <ButtonBase className="link" href="/skills">
            Skills
          </ButtonBase>

          <ButtonBase className="link" href="/projects">
            Projects
          </ButtonBase>

          <ButtonBase className="link" href="/design-systems">
            Design systems
          </ButtonBase>
        </div>

        <div
          style={{
            fontSize: "10px",
            textAlign: "center",
            color: "brown",
            paddingBottom: "4px",
          }}
        >
          **ps! pardon my dust but i'm about to redo this whole website :D**
        </div>
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
