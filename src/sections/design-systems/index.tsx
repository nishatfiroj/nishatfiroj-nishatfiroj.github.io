import { Grid } from "@mui/material"
import { Card } from "../../components"

export const DesignSystems = () => {
  return (
    <Grid container justifyContent="center">
      <h2>Design Systems</h2>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card
            gradient
            height="250px"
            title="Developing and deploying components"
            url="/Development"
          >
            <p>
              Across the three iterations of design systems I've worked on, from
              my time as an intern to a level 2 engineer at NCR, I've tested,
              built, and modified new and existing React components.
            </p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            gradient
            height="250px"
            title="Critiquing and validating designs"
            url="/Design"
          >
            <p>
              From building Figma plugins to assist and validate design efforts
              of my peers to participating in design and accessibility reviews,
              I was an active participant in the evolution of components, from
              creation to production.
            </p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            gradient
            height="250px"
            title="Documenting implementation and behaviors"
            url="/Documentation"
          >
            <p>
              I've documented and audited the design system of most major
              companies and have compared them to the NCR design system to
              better understand where our successes and downfalls are.
            </p>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  )
}
