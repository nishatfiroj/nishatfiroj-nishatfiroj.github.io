import React from "react"
import { Grid } from "@mui/material"
import { Card } from "../../components"

// ICONS
import CodeIcon from "@mui/icons-material/Code"
import DataObjectIcon from "@mui/icons-material/DataObject"
import PsychologyIcon from "@mui/icons-material/Psychology"

export const Skills = () => {
  return (
    <Grid
      padding={4}
      container
      alignItems="center"
      justifyContent="center"
      direction="row"
    >
      <Grid item container paddingBottom={4}>
        <h2>The stuff I do</h2>
        <p>
          After graduating from Georgia Tech with a Bachelor's in Computer
          Science, I began my work as a frontend software engineer at NCR
          working to develop the company's design system. I used different
          frameworks, languages, and API's to design, develop, and document
          different components and patterns. My work so far can be summed up
          with the following:
        </p>

        <ul>
          <li>
            Designed and coded in all iterations of NCR design systems, with
            combined 100k+ component insertions for both NPM and Figma libraries
          </li>
          <li>
            Used React, TypeScript, and MUI frameworks to code, test, and
            maintain white-label components for usage across multiple lines of
            business
          </li>
          <li>
            Saved 20+ hours of development work by designing and coding design
            patterns into NPM packages; Built Figma plugins in React to assist
            with color and typography audits, with active usage amongst peer
            designers
          </li>
          <li>
            Designed, documented, and coded data visualization library
            components for React and React Native implementations across
            multiple LOB products
          </li>
        </ul>
      </Grid>
      <Grid item container paddingBottom={4}>
        <h2>The stuff I know</h2>
        <Grid container spacing={2} justifyContent="center" paddingTop={2}>
          <Grid item xs={12} md={4}>
            <Card
              icon={<CodeIcon fontSize="large" sx={{ fontSize: 52 }} />}
              gradient
              title="Languages (and their offshoots)"
            >
              <Grid container paddingTop={2}>
                <ul>
                  <li>
                    <b>JavaScript</b> - Proficiency in navigating and utilizing
                    built in functions and objects
                  </li>
                  <li>
                    <b>TypeScript</b> - Proficiency in applying strictly typed
                    and organized JavaScript, in the context and language of
                    TypeScript
                  </li>
                  <li>
                    <b>HTML/CSS</b> - Proficiency in implementing and hooking up
                    HTML/CSS across multiple frameworks
                  </li>
                  <li>
                    <b>Java</b> - High competency in object oriented programming
                    after completing CS degree at Georgia Tech taught almost
                    entirely in Java
                  </li>
                  <li>
                    <b>GraphQL</b> - Competency in utilizing GraphQL to fetch,
                    update, and delete data from databases (i.e. MongoDB,
                    Express, etc.) in a RESTful manner
                  </li>
                  <li>
                    <b>Python</b> - Advanced beginner in applying Python for
                    data manipulation and implementing algorithms
                  </li>
                </ul>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              icon={<DataObjectIcon fontSize="large" sx={{ fontSize: 52 }} />}
              gradient
              title="Libraries, frameworks, and software"
            >
              <Grid container paddingTop={2}>
                <ul>
                  <li>
                    <b>Node.js</b> - Proficiency in using Node environments
                    across multiple platforms, frameworks, etc.
                  </li>
                  <li>
                    <b>React</b> - Proficiency in rapid prototyping with React,
                    React hooks, and functional programming respecting the
                    tenets of React
                    <ul>
                      <li>
                        <b>Next.js</b> - Proficiency in fast development of
                        user-friendly SPAs and other static web apps
                      </li>
                      <li>
                        <b>Express.js</b> - Competency in utilizing Express for
                        quickly setting up a backend for prototyped web apps
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>StencilJS</b> - High competency in applying StencilJS
                    toolchain to build a design system from the ground up
                  </li>
                  <li>
                    <b>NPM, Yarn</b> - Proficiency in using package managers to
                    install appropriate dependecies, ensure correct versioning
                    across releases, and to keep coding environments clean
                  </li>
                  <li>
                    <b>Jest</b> - Competency in modular testing of code to
                    ensure robust, well-tested repositories
                  </li>
                  <li>
                    <b>Github, GIT, Git actions</b> - Proficiency in source
                    control to ensure clean CI/CD, appropriate versioning, etc.
                  </li>
                  <li>
                    <b>Lerna, Yarn workspaces</b> - Competency in implementing
                    tools to keep versioning clean
                  </li>
                </ul>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              icon={<PsychologyIcon fontSize="large" sx={{ fontSize: 52 }} />}
              gradient
              title="Concepts and methods"
            >
              <Grid container paddingTop={2}>
                <ul>
                  <li>
                    <b>Design systems</b> - Proficiency in building, scaling,
                    and implementing design systems
                  </li>
                  <li>
                    <b>Object oriented programming</b> - Proficiency in bottom
                    up programming, keeping code reusable and flexible, modular
                    programming, etc.
                  </li>
                  <li>
                    <b>Functional programming</b> - Proficiency in top down
                    programming, state management, modular programming, etc.
                  </li>
                  <li>
                    <b>Data structures and algorithms</b> - Proficiency in using
                    algorithmic knowledge to solve problems
                  </li>
                  <li>
                    <b>Technical documentation</b> - Proficiency in writing
                    clear, user-friendly documentation for technical and
                    non-technical audiences
                  </li>
                  <li>
                    <b>Accessibility</b> - Proficiency in designing and
                    developing interfaces that are WCAG compliant
                  </li>
                  <li>
                    <b>Agile development</b> - Proficiency in quickly delivering
                    features and collaborating effectively with peers in an
                    Agile environment
                  </li>
                </ul>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
