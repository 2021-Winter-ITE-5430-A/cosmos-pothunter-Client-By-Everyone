
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

 
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

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

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

/* export default function CustomizedRatings() {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Mentors name</Typography>
        <Rating
          name="customized-empty"
          defaultValue={2}
          precision={0.5}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
        />
      </Box>     
    </div>
  );
} */


const MentorsRating = () => {
  const [formData, setFormData] = useState([]);

  const { userName, date, storydetails, id } = formData;
  useEffect(() => {
    axios.get('https://soumitra-serverapi.herokuapp.com/api/rating').then((response) => {
      setFormData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>

      <div>        
      <div className="mentors-photo-heading">Mentor's Ratings</div>
        <div className="story-container">
          {formData.map((item) => (
            <RatingItem story={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
};

const RatingItem = (props) => {
  return (
    <div>

      <div className="mentors-image-container">
        <Card className={useStyles.root} style={{ maxWidth: "70%" }}>
          <CardActionArea>
            <CardMedia
              className={useStyles.media} style={{ height: "200px", width: "200px", paddingTop: "2%" }}
              //image="/static/images/cards/contemplative-reptile.jpg"
              image={imageUrl}
              //image="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&w=1000&q=80"

              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.story.mentorsName}
              </Typography>
              <Typography gutterBottom variant="h7" color="textSecondary" component="h5">
                {props.story.date}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{verticalAlign: 'middle',
    display: 'inline-flex'}}>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography component="legend">Overall Rate</Typography>
                  <Rating
                    name="overallRate"
                    value={props.story.overallRate}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography component="legend">Knowledge Rate</Typography>
                  <Rating
                    name="knowledgeRate"
                    value={props.story.knowledgeRate}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography component="legend">Positiv Attitude</Typography>
                  <Rating
                    name="positivAttitudeRate"
                    value={props.story.positivAttitudeRate}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                  <Typography component="legend">Constructive Feedback</Typography>
                  <Rating
                    name="ConstructiveFeedbackRate"
                    value={props.story.ConstructiveFeedbackRate}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                  />
                </Box>
              </Typography>              
              <Typography variant="body2" color="textSecondary" component="p">
                <div>
                  <div>User Feed Back</div>
                  She is good as a mentors
                  </div>
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


export default MentorsRating;  