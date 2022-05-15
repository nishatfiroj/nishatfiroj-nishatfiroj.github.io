import { Grid } from "@mui/material"

export const Designer = () => (
  <Grid item container>
    My participation in design reviews heavily focus on:
    <ul>
      <li>How does this translate to responsive design?</li>
      <li>How does this affect load time?</li>
      <li>Is this design future proof/iterable?</li>
      <li>Does this design meet the WCAG requirements?</li>
      <ul>
        <li>
          When it is translated to the web, will it be able to continue to meet
          WCAG requirements?
        </li>
      </ul>
    </ul>
  </Grid>
)
