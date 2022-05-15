import React from "react"
import type { FC } from "react"
import { Grid, Paper } from "@mui/material"
import "../App.css"
import { ChevronRight } from "@mui/icons-material"
import { NavLink } from "react-router-dom"

export const Card: FC<{
  title?: string
  height?: string
  width?: string
  url?: string
  children: any
}> = ({
  title = "",
  children = "Card",
  height = "auto",
  width = "auto",
  url = undefined,
}) => {
  const red = { border: "1px solid red" }

  return (
    <Paper
      elevation={0}
      style={{
        border: "1px solid #1a1a1a",
        borderRadius: "8px",
        padding: "2em 2em 0em 2em",
        minHeight: height,
        width: width,
      }}
    >
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item container>
          <Grid item>{title !== "" && <h3>{title}</h3>}</Grid>
          <Grid item>
            <>{children}</>
          </Grid>
        </Grid>
        <Grid item container justifyContent="right">
          {url && (
            <NavLink to={url}>
              <ChevronRight />
            </NavLink>
          )}
        </Grid>
      </Grid>
    </Paper>
  )
}
