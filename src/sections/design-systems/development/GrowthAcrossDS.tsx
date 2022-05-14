import { Button, Grid, Tooltip } from "@mui/material";
import { Card } from "../../../components";
import "../../../App.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Dot } from "../../../assets";
import { useState } from "react";

export const GrowthAcrossDS = () => {
  const Roles = () => (
    <Card height="420px">
      <Grid
        direction="column"
        alignItems="space-between"
        spacing={4}
        style={{ position: "relative" }}
      >
        <Grid item container justifyContent="space-evenly">
          <Grid item xs={12} md={3}>
            <p style={{ fontWeight: 800 }}>Intern</p>
            <p>Audit and test React components</p>
          </Grid>
          <Grid item xs={12} md={3}>
            <p style={{ fontWeight: 800 }}>University Hire</p>
            <p>Build components using StencilJS/React for ground up DS</p>
          </Grid>
          <Grid item xs={12} md={3}>
            <p style={{ fontWeight: 800 }}>Engineer II</p>
            <p>Use hooks to reface MUI components for a refaced DS</p>
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="flex-end"
          style={{
            position: "absolute",
            bottom: 0,
          }}
        >
          <Grid item xs={1}>
            <Button onClick={() => setElement(<Nui />)}>
              <ChevronRight />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );

  const Nui = () => (
    <Card height="420px">
      <Grid
        direction="column"
        alignItems="space-between"
        spacing={4}
        style={{ position: "relative" }}
      >
        <Grid item container>
          <ul>
            <li>Role: Intern</li>
            <li>
              State of NUI during my entry: library of Angular and React
              components
            </li>
            <li>Work:</li>
            <ul>
              <li>
                Audited the DS to discover if there were any missing components
                that would make the library more complete
              </li>
              <li>
                Built out demo React SPA’s to test the ease of use of the NUI
                components
              </li>
            </ul>
          </ul>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          style={{
            position: "absolute",
            bottom: 0,
          }}
        >
          <Grid item xs={1}>
            <Button onClick={() => setElement(<Roles />)}>
              <ChevronLeft />
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button onClick={() => setElement(<Alpha />)}>
              <ChevronRight />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );

  const Alpha = () => (
    <Card height="420px">
      <Grid
        direction="column"
        alignItems="space-between"
        spacing={4}
        style={{ position: "relative" }}
      >
        <Grid item container>
          <ul>
            <li>Role: University Hire</li>
            <li>State of Alpha during my entry: nonexistent</li>
            <li>Work:</li>
            <ul>
              <li>
                Used StencilJS, React, Node, and other frameworks, languages,
                and modules to design, develop, and document components from the
                ground up
              </li>
              <li>Used Jest to test the components usability</li>
              <li>Tested for accessibility via various browser tools</li>
            </ul>
          </ul>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="space-between"
          style={{
            position: "absolute",
            bottom: 0,
          }}
        >
          <Grid item xs={1}>
            <Button onClick={() => setElement(<Nui />)}>
              <ChevronLeft />
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button onClick={() => setElement(<DS />)}>
              <ChevronRight />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );

  const DS = () => (
    <Card height="420px">
      <Grid
        direction="column"
        alignItems="space-between"
        spacing={4}
        style={{ position: "relative" }}
      >
        <Grid item container>
          <ul>
            <li>Role: Level 2 engineer</li>
            <li>State of DS during my entry: nonexistent</li>
            <li>Work:</li>
            <ul>
              <li>
                Refacing Google’s design system components using context and
                provider hooks
              </li>
              <li>
                Layered theming functions to allow white label products at NCR
                to add greater customizations on components we provided
              </li>
              <li>
                Creating custom components as peer dependencies when appropriate
              </li>
            </ul>
          </ul>
        </Grid>
        <Grid
          item
          container
          direction="row"
          justifyContent="flex-start"
          style={{
            position: "absolute",
            bottom: 0,
          }}
        >
          <Grid item xs={1}>
            <Button onClick={() => setElement(<Alpha />)}>
              <ChevronLeft />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );

  const [element, setElement] = useState<JSX.Element>(<Roles />);

  return (
    <Grid padding={8}>
      <div style={{ padding: "1em" }}>
        <Tooltip title="Home">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Dot />
          </Link>
        </Tooltip>
      </div>
      <Grid className="container" container justifyContent="center">
        <h2>Design Systems</h2>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4} md={3}>
            <Card height="420px" title="Developing and deploying components">
              <p>
                Across the three iterations of design systems I've worked on,
                from my time as an intern to a level 2 engineer at NCR, I've
                tested, built, and modified new and existing React components.
              </p>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            md={6}
            justifyContent="center"
            alignItems="center"
          >
            {element}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
