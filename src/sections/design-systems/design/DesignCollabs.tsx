import "../../../App.css"
import { Grid, Tooltip } from "@mui/material"
import { Card, CarouselCard, CardBase } from "../../../components"
import { Link } from "react-router-dom"
import { Dot } from "../../../assets"
import { Developer, Designer, TypesAndIcons } from "."

export const DesignCollabs = () => {
  const cards: CardBase[] = [
    { title: "The Developer", card: <Developer /> },
    { title: "Perspectives", card: <Designer /> },
    { title: "Types & icons", card: <TypesAndIcons /> },
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
        <h2>Design Collabs</h2>

        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4} md={3}>
            <Card height="420px" title="Developing and deploying components">
              <p>
                From building Figma plugins to assist and validate design
                efforts of my peers to participating in design and accessibility
                reviews, I was an active participant in the evolution of
                components, from creation to production.
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
            <CarouselCard height="420px" cards={cards}></CarouselCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
