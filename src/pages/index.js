import React from "react"
import { Link } from "gatsby"
import Cards from '../components/Cards';
import TextWithTitle from '../components/TextWithTitle';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  const howAreWeDifferent = [{
    title: 'Client-determined goals',
    contents: 'We support the client in setting their own career, entrepreneurial or personal goals',
  }, {
    title: 'One-on-one skills development',
    contents: 'We do this through a tailored, project-based approach that meets unique goals and needs.',
  }, {
    title: 'Wrap-around supports',
    contents: 'We have strategic partnerships with community organizations to provide additional support.',
  },
  ]

  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby!</h1>
      <p>What a world.</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />

      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ backgroundColor: '#4529AE', minHeight: '762px' }}
      >
        <Grid item xs={12}>
          <TextWithTitle />
        </Grid>
        <Grid item xs={12}>
          <Cards cardContents={howAreWeDifferent} />
        </Grid>
      </Grid>
    </div>
  )
}
