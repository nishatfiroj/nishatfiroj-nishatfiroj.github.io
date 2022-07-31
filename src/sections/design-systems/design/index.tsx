import "../../../App.css"
import { Grid } from "@mui/material"
import { Card, CarouselCard, CardBase } from "../../../components"
import { Designer } from "./Designer"
import { TypesAndIcons } from "./TypesAndIcons"
import { Developer } from "./Developer"

export const Design = () => {
  const cards: CardBase[] = [
    { title: "The Developer", card: <Developer /> },
    { title: "Perspectives", card: <Designer /> },
    { title: "Types & icons", card: <TypesAndIcons /> },
  ]

  return (
    <Grid className="container" container justifyContent="center" spacing={2}>
      <Grid item xs={12} sm={4} md={4}>
        <Card height="420px" title="Developing and deploying components">
          <p>
            From building Figma plugins to assist and validate design efforts of
            my peers to participating in design and accessibility reviews, I was
            an active participant in the evolution of components, from creation
            to production.
          </p>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={8}
        justifyContent="center"
        alignItems="center"
      >
        <CarouselCard height="420px" cards={cards}></CarouselCard>
      </Grid>
    </Grid>
  )
}
