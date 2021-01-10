import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//Tilt Component 
import Tilt from 'react-tilt'

const useStyles = makeStyles({
  root: {
    
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();

  return (
    <Tilt className="Tilt" options={{ max : 25 }} style={{marginBottom:"30px"}} >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.alt}
          height="100%"
          image={props.image}
        />
        {
            props.image2 ? 
            <CardMedia
            component="img"
            alt={props.alt}
            height="100%"
            image={props.image2}
            style={{marginTop:"-20px"}}
          />
          : null
        }
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {
        props.link ? 
        <CardActions>
        <Button size="small" color="primary" href={props.link}>
          Preview
        </Button>
      
      </CardActions>
      : null
      }
     
    </Card>
    </Tilt>
  );
}
