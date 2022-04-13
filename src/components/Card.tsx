import React from "react";
import type { FC } from "react";
import { Grid, Paper } from "@mui/material";
import "../App.css";

export const Card: FC<{
  title: string;
  children: any;
}> = ({ title = "", children = "Card" }) => {
  return (
    <Grid item>
      <Paper elevation={2} className="card">
        <h3>{title}</h3>
        <>{children}</>
      </Paper>
    </Grid>
  );
};
