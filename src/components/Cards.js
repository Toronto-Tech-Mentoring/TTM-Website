import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title:{
      fontFamily:'Poppins',
      textAlign:'center',
      color:'#873FE2'
  }
}));

export default function Cards(props) {
  const classes = useStyles();
  const {cardContents} = props;

  return (
      <div>
        {cardContents.map((card)=> (
            <Card className={classes.root}>
                <CardHeader className={classes.title}
                title={card.title}
                />
                <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {card.contents}
                </Typography>
                </CardContent>
            </Card>
        ))}
      </div>
      
  );
}
