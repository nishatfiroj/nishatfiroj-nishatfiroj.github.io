import { Grid } from "@mui/material"
import { Design } from "./design"
import { Development } from "./development"
import { Documentation } from "./documentation"

export const DesignSystems = () => {
  return (
    <Grid
      padding={4}
      container
      alignItems="center"
      justifyContent="center"
      direction="row"
    >
      <Grid item container paddingBottom={4}>
        <h2>Design perspective</h2>
        <Design />
      </Grid>

      <Grid item container paddingBottom={4}>
        <h2>Development perspective</h2>
        <Development />
      </Grid>
      <Grid item container paddingBottom={4}>
        <h2>Documentation perspective</h2>
        <Documentation />
      </Grid>

      <Grid container spacing={2} justifyContent="center"></Grid>
    </Grid>
  )
}
