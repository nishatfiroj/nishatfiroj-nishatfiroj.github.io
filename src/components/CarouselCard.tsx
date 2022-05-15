import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import { Button, Grid } from "@mui/material"
import { FC, useState } from "react"
import { Card } from "./Card"

export type CardBase = {
  title: string
  card: JSX.Element
}

export const CarouselCard: FC<{
  cards?: CardBase[]
  height?: string
}> = ({ cards = [], height = "auto" }) => {
  const [i, setI] = useState<number>(0)

  const handleClick = (direction: "prev" | "next") => {
    if (direction === "prev" && i > 0) {
      setI(i - 1)
    }
    if (direction === "next" && i < cards.length - 1) {
      setI(i + 1)
    }
    return i
  }

  return (
    <Card height={height}>
      <Grid
        container
        minHeight="360px"
        direction="column"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid container item>
          {cards[i].card}
        </Grid>
        <Grid
          container
          item
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Grid item onClick={() => handleClick("prev")}>
            <Button disabled={i === 0}>
              <ChevronLeft />
            </Button>
          </Grid>
          <Grid item>
            <p>{cards[i].title}</p>
          </Grid>
          <Grid item onClick={() => handleClick("next")}>
            <Button disabled={i === cards.length - 1}>
              <ChevronRight />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  )
}
