import React from "react"
import { Grid } from "@mui/material"
import { Card } from "../components"
import "../App.css"

export const WhatIDo = () => {
  return (
    <Card gradient>
      <Grid
        paddingBottom={4}
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
        style={{
          maxWidth: "1093px",
        }}
      >
        <h2>WHAT I DO</h2>
        <>
          After graduating from Georgia Tech with a Bachelor's in Computer
          Science, I began my work as a frontend software engineer at NCR
          working to develop the company's design system. I used different
          frameworks, languages, and API's to design, develop, and document
          different components and patterns.
        </>
      </Grid>
    </Card>
  )
}
