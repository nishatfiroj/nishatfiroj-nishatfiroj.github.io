import { Grid } from "@mui/material";
import "../App.css";

export const Intro = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      direction="column"
      style={{
        padding: "2em",
        maxWidth: "1093px",
        textAlign: "center",
      }}
    >
      <h1>Hi! I'm Nishat Firoj!</h1>
      <h2>DEVELOPMENT • DESIGN • DOCUMENTATION</h2>
      <h3>
        Developer of design systems and innovater of human-computer
        interactions.
      </h3>
    </Grid>
  );
};
