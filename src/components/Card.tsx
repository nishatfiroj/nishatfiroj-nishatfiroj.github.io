import React from "react";
import type { FC } from "react";
import { Paper } from "@mui/material";
import "../App.css";

export const Card: FC<{
  title?: string;
  height?: number;
  width?: string;
  children: any;
}> = ({ title = "", children = "Card", height = 200, width = "auto" }) => {
  return (
    <Paper
      elevation={0}
      style={{
        border: "1px solid #1a1a1a",
        borderRadius: "8px",
        padding: "2em",
        minHeight: height,
        width: width,
      }}
    >
      <h3>{title}</h3>
      <>{children}</>
    </Paper>
  );
};
