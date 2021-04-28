
 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import imageUrl from '../img/avatar2.png';
 
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 500,
    },
    media: {
      height: 350,
    },
  });


const UserSuccessStory = () => {  
  const [formData, setFormData] = useState([]);

  const { userName, date, storydetails, id } = formData;
  useEffect(() => {
  axios.get('https://soumitra-serverapi.herokuapp.com/api/story').then((response) => {
    setFormData(response.data);
    console.log(response.data);
  });
}, []);  

  return (
    <>   
       
      <div>     
      <div className="mentors-photo-heading">Success Story</div> 
      <div className="story-container">        
        {formData.map((item) => (
          <StoryItem story={item} key={item.id} />
        ))}
        </div>
      </div>
    </>
  );
};

const StoryItem =(props) =>{

  return(
    
    <div>
      
      <div className="mentors-image-container">
      <Card className={useStyles.root} style={{maxWidth: "70%"}}>
        <CardActionArea>
          <CardMedia
            className={useStyles.media} style={{ height: "200px", width:"200px", paddingTop: "2%" }}
            //image="/static/images/cards/contemplative-reptile.jpg"
            image={imageUrl}
            //image="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80"

            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            {props.story.userName}
          </Typography>
          <Typography gutterBottom variant="h7" color="textSecondary" component="h5">                   
            {props.story.date}           
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {props.story.storydetails}
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
        </Button>
          <Button size="small" color="primary">
            Learn More
        </Button>
        </CardActions>
      </Card>
    </div>
    </div >
  )
};

export default UserSuccessStory