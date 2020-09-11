import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '350px',
    maxHeight:'360px',
    borderRadius:'30px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: '#873FE2',
    fontSize: '18px'
  },
  contents: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: 'black',
    fontSize: '18px'
  }
}));

export default function Cards(props) {
  const classes = useStyles();
  const { cardContents } = props;

  return (
    <div>
      {cardContents.map((card) => (
        <Card className={classes.root}>
          <CardHeader className={classes.title}
            title={card.title}
          />
          {/* <CardMedia
            className={classes.media}
            image="/static/images/cards/paella.jpg"
          /> */}
          <CardContent>
            <p className={classes.contents}>
              {card.contents}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>

  );
}
