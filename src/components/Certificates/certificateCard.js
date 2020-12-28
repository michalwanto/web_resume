import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: "445px",
    borderRadius: "1px",
    marginBottom:"30px",
    boxShadow: "0px 10px 25px 0px rgba(0, 0, 0, 0.3)",
    verticalAlign: "middle",
    borderStyle: "none"
  },
  media: {
    minHeight:'343px',
  },
});

export default function CertificateCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imgSrc}
        />
       
      </CardActionArea>
    </Card>
  );
}
