import React from "react"
import { Link } from "gatsby"
import Cards from '../components/Cards';
import TextWithTitle from '../components/TextWithTitle';
import Grid from '@material-ui/core/Grid';

export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/contact/">Contact</Link>
      <h1>Hello Gatsby! sadsadsadasd</h1>
      <p>What a world.</p>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ backgroundColor: '#4529AE', minHeight: '762px', textAlign:'center' }}
      >
        <Grid item xs={12}>
          <TextWithTitle />
        </Grid>
        <Grid item xs={12}>
          <Cards />
        </Grid>
      </Grid>
    </div>
  )
}
