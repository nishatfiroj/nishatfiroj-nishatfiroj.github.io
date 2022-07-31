import React from "react"
import type { FC } from "react"
import { Grid, Link } from "@mui/material"
import "../App.css"
import { ChevronRight, GitHub } from "@mui/icons-material"
import { NavLink } from "react-router-dom"

export const Card: FC<{
  title?: string
  height?: string
  width?: string
  url?: string
  github?: string
  gradient?: boolean
  children: any
  icon?: any
}> = ({
  title = "",
  children = "Card",
  height = "auto",
  width = "auto",
  github = undefined,
  url = undefined,
  icon = undefined,
}) => {
  return (
    <div
      style={{
        border: "1px solid #1a1a1a",
        borderRadius: "8px",
        padding: "2em 2em 0em 2em",
        minHeight: height,
        width: width,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        minHeight={height}
      >
        <Grid container item>
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            paddingTop={1}
            paddingBottom={3}
          >
            {icon !== undefined && icon}
          </Grid>
          <Grid item>
            {title !== "" && <h3 style={{ marginBottom: "-10px" }}>{title}</h3>}
            <>{children}</>
          </Grid>
        </Grid>
        <Grid item container justifyContent="right" padding="1em 0">
          {url && (
            <NavLink to={url}>
              <ChevronRight style={{ color: "#1a1a1a" }} />
            </NavLink>
          )}
          {github && (
            <Link href={github}>
              <GitHub style={{ color: "#1a1a1a" }} />
            </Link>
          )}
        </Grid>
      </Grid>
    </div>
  )
}
