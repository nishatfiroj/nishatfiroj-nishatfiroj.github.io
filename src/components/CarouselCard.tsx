import { FC, useState } from "react"

export type CardBase = {
  title: string
  card: JSX.Element
}

export const CarouselCard: FC<{
  cards?: CardBase[]
}> = ({ cards = [] }) => {
  const [currCard, setCard] = useState<CardBase>()
  setCard(cards[0])

  return <div>{cards[0].card}</div>
}
