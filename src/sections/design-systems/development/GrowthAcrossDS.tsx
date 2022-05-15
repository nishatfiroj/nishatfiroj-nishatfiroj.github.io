import "../../../App.css"
import { Grid, Tooltip } from "@mui/material"
import { Card, CarouselCard, CardBase } from "../../../components"
import { Link } from "react-router-dom"
import { Dot } from "../../../assets"
import { Roles, Nui, Alpha, DS } from "."

export const GrowthAcrossDS = () => {
  const cards: CardBase[] = [
    { title: "Growth Across Three Design Systems", card: <Roles /> },
    { title: "Design System 1: NUI", card: <Nui /> },
    { title: "Design System 1: Alpha", card: <Alpha /> },
    { title: "Design System 1: DS", card: <DS /> },
  ]

  return (
    <Grid>
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
            CARD WOULD GO HERE
            <CarouselCard cards={cards}></CarouselCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
