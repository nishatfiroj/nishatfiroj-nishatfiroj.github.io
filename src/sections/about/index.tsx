import React from "react"
import { Grid } from "@mui/material"
import self from "../../assets/self.png"

export const About = () => {
  return (
    <Grid padding={4} container justifyContent="center" direction="row">
      <Grid item xs={8}>
        <h2>Who I am (in techy terms)</h2>
        <p>
          I am a developer, a designer, and a documenter (mostly a developer)
          living in Atlanta. I've been coding for about 5 years, and have made a
          bunch of random projects in that time, ranging from React sites, to
          C++ GBA games, to React Native applications.
        </p>
        <p>
          I've worked at NCR for two years now, not including a 3 month
          internship before I graduated from Tech.
        </p>
        <p>
          Before that I worked as a Visual Research Developer at the Tech Square
          Research Building to bring advocacy to the 400k citizens of Atlanta
          via digital media and investigative data manipulation with Python and
          JavaScript.
        </p>
        <p>
          I've additionally worked as a Peer Consultant and a Marketing/Digital
          Media Manager for over 2 years at the Georgia Tech Communication
          Center to assist tens of thousands of GT students with research
          papers, dissertations, 3D printing adventures and more.
        </p>
        <p>
          My professional work also crossed paths into the non-profit world,
          with my work with the Girls Who Code program, where I taught a
          classroom of 20 high school girls the basics of computer programming
          (from Python all the way to C++ and Arduino).
        </p>
        <br />
        <h2>Who I am (when I'm not on the beep boop machine)</h2>
        <p>
          Outside of programming, I'm an artist with special interest in
          pencil/pen sketching, painting, mixed media, and graphic art. I'm also
          a runner (who knows how many hundreds of miles I've run over these
          past 7 years).
        </p>
        <p>
          As a person of multiple identities, I'm an avid participant of both
          BIPOC and queer spaces and hope to continue to be a voice for
          empowerment amongst disenfranchised groups. I love to bring that
          energy with me to the workplace, because I believe a diverse,
          inclusive work community is one that can come up with the most
          creative, robust solutions.
        </p>
      </Grid>
      <Grid item xs={4}>
        <img src={self} alt="Image of portfolio author" width="300px" />
      </Grid>
    </Grid>
  )
}
