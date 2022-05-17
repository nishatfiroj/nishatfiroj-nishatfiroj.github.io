import React from "react"
import type { FC } from "react"
import { Grid } from "@mui/material"
import "../App.css"
import "./gradient.css"
import { ChevronRight } from "@mui/icons-material"
import { NavLink } from "react-router-dom"

export const Card: FC<{
  title?: string
  height?: string
  width?: string
  url?: string
  gradient?: boolean
  children: any
}> = ({
  title = "",
  children = "Card",
  height = "auto",
  width = "auto",
  gradient = false,
  url = undefined,
}) => {
  return (
    <div
      {...(gradient && { className: "border-glow" })}
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
        <Grid item container justifyContent="right" padding="1em 0">
          {url && (
            <NavLink to={url}>
              <ChevronRight />
            </NavLink>
          )}
        </Grid>
      </Grid>
    </div>
  )
}
