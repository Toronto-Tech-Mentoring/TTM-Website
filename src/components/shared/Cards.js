import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import { useStyles } from '../shared/styles/CardsStyle';

export default function Cards(props){
    const classes = useStyles();

    return(
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} md={4} lg={3} xl={2}>
          <Card className={classes.root}>
            <p className={classes.title}>{props.title1}</p>
            <div className={classes.imgDiv} style={{ backgroundImage: `url(${props.background1}` }}>
              <img className={classes.innerImage} style={{ top: '35px' }} alt="skill_development" src={props.pic1} />
            </div>  
            <CardContent>
              <p className={classes.contents}>
                {props.text1}
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={3} xl={2}>
          <Card className={classes.root}>
            <p className={classes.title}>{props.title2}</p>
            <div className={classes.imgDiv} style={{ backgroundImage: `url(${props.background2}` }}>
              <img className={classes.innerImage} style={{ top: '15px', zIndex: '3', left: '60px' }} alt="skill_development" src={props.pic2} />
              <img className={classes.innerImage} style={{ top: '30px', zIndex: '2', right: '55px' }} alt="shiny" src={props.shiny2} />
            </div>
            <CardContent>
              <p className={classes.contents}>
                {props.text2}
              </p>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} lg={3} xl={2}>
          <Card className={classes.root}>
            <p className={classes.title}>{props.title3}</p>
            <div className={classes.imgDiv} style={{ backgroundImage: `url(${props.background3}` }}>
              <img className={classes.innerImage} style={{ top: '44px', zIndex: '3', left: '60px' }} alt="supports" src={props.pic3} />
              <img className={classes.innerImage} style={{ top: '33px', zIndex: '2', right: '60px' }} alt="shiny" src={props.shiny3} />
            </div>
            <CardContent>
              <p className={classes.contents}>
                {props.text3}
              </p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    )
}