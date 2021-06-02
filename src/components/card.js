import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ReactCardFlip from 'react-card-flip';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [isFlipped, setisFlipped] =useState(false)

  function handleClick(e) {
    e.preventDefault();
    setisFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Card className={classes.root} style={{backgroundColor:'#1F95EB'}}>
            <CardContent>
                <center>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Eo_circle_blue_white_number-3.svg/1200px-Eo_circle_blue_white_number-3.svg.png" width="50" height="50"></img>
                </center>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClick}>Flip card</Button>
            </CardActions>
        </Card>

        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} gutterBottom>
                    Front
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={handleClick}>Flip card</Button>
            </CardActions>
        </Card>

    </ReactCardFlip>
  );
}