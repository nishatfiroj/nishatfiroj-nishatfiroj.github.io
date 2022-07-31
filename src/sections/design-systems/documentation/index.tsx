import "../../../App.css"
import { Grid } from "@mui/material"
import { Card, CarouselCard, CardBase } from "../../../components"
import { DS } from "./DS"
import { Experience } from "./Experience"

export const Documentation = () => {
  const cards: CardBase[] = [
    { title: "Experience", card: <Experience /> },
    { title: "Design Systems", card: <DS /> },
  ]

  return (
    <Grid>
      <Grid className="container" container justifyContent="center">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Card height="420px" title="Developing and deploying components">
              <p>
                From building Figma plugins to assist and validate design
                efforts of my peers to participating in design and accessibility
                reviews, I was an active participant in the evolution of
                components, from creation to production.
              </p>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} justifyContent="center" alignItems="center">
            <CarouselCard height="420px" cards={cards}></CarouselCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
