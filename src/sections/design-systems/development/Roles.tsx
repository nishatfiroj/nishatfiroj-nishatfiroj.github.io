import { Grid } from "@mui/material"

export const Roles = () => (
  <Grid item container justifyContent="space-evenly">
    <Grid item xs={3}>
      <p style={{ fontWeight: 800 }}>Intern</p>
      <p>Audit and test React components</p>
    </Grid>
    <Grid item xs={3}>
      <p style={{ fontWeight: 800 }}>University Hire</p>
      <p>Build components using StencilJS/React for ground up DS</p>
    </Grid>
    <Grid item xs={3}>
      <p style={{ fontWeight: 800 }}>Engineer II</p>
      <p>Use hooks to reface MUI components for a refaced DS</p>
    </Grid>
  </Grid>
)
