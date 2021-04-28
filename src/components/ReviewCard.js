import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import MainHead from './MainHead';
import Navigation from './Navigation';
import ResumeFaq from './ResumeFaq';
import Jobs from './Jobs';
import FormNew from './auth/FormNew';
import JsonApiWords from './JsonApiWords';
import JsonApiJobs from './JsonApiJobs';
import CardImg from './CardImg';
import './CardI.css';
import './SamPic.css';
import resumeCard from '../img/resumecard.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const ReviewCard = () => {
  const classes = useStyles();

  const mystyle = {
    color: "white",
    width: "90%",
    height: "90%",
    backgroundColor: "#b2beb5",
    padding: "20px",
    fontFamily: "Arial"
    
  };

  const mystyle2 = {
    width: "50%",
    height: "auto",
    color: '#B8B7B8',
    backgroundColor: "#421850",
    fontFamily:'fantasy',
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    padding: '30px'
  };
  const mystyle3 = {
    width: "auto",
    height: "auto",
    backgroundColor: "#DED7E0",
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    padding: '30px'
  };
  const mystyle4 = {
backgroundColor: "#4C8259",
   color: "white"
 
  };
  return (
  <div >
  <br></br>
 <br></br>
 
      
    <div style={{backgroundColor:'#DED7E0'}}>
    <div className="container" style={{display:'flex', justifyContent:'center'}}>
      <div className="card" style={{backgroundColor:'#421850', width:'70%', padding:'30px'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="review" style={mystyle4} className={classes.avatar}>
            #
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
          </IconButton>
        }
        title="Why You Should Use Our Templates?"
        subheader="We have Professional Resume Samples!"
      />
             <Typography paragraph>

        <h3>
        "It’s always a safe bet to go with this classic designs. 
        Acceptable in any industry and for just about any role, 
        this well-crafted template always makes you look sharp."
        </h3>

        </Typography>

          {/* <img src ={require('./resumecard.jpg')} alt = "Resume Img" style={mystyle} /> */}
          <img src ={resumeCard} alt = "Resume Img" style={mystyle} />
          
        <CardContent>
        <Typography variant="body2" component="p" color="white">
        <h3>
        # Use our templates when applying to organizations 
        with strong brands, and for jobs where you’re 
        expected to have up-to-the-minute knowledge of 
        business, technology or culture trends.
        </h3>        
            <br></br>
        <h3>
        # Getting a good job requires a good resume, 
        but creating a resume from scratch can be challenging. 
        Instead of winging it, use our free resume templates 
        to build a document that catches an employer’s 
        eye and presents your credentials in crisp, organized fashion. 
        Just choose a design, and create your resume in minutes.
        </h3>
        <br></br>
        <h3>
        # Remember, a resume is a summary of your ACCOMPLISHMENTS!
        </h3>
        </Typography>
        </CardContent>
        <br></br>
        <br></br>
      </div>
    </div>
    </div>

         {/* <BrowserRouter>
         <br></br>
         <br></br>
          <Navigation />
          
          <Routes>
          <Route path='/JsonApiJobs' component={JsonApiJobs} />
          <Route path='/resumefaq' component={ResumeFAQ} />
          <Route path='/mainhead' component={MainHead} />
          <Route path='/jobs' component={Jobs} />
          <Route path='/JsonApiWords' component={JsonApiWords} />
          <Route path='/form' component={FormNew} />
          </Routes>
          </BrowserRouter> */}

          <br></br>

          <CardImg />

          <br></br>
    </div>

  );
}

export default ReviewCard;