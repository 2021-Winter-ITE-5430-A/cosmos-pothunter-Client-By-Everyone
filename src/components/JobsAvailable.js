import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import './SamPic.css';



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

}));
function JobsAvailable({ id, name, company, location,applyhere, date, removeTask, navJob }) {
  const classes = useStyles();
  const mystyle2 = {
    width: "75%",
    height: "70%",
    backgroundColor: "white",
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
  };
  return (
    <Card className={classes.card} style={mystyle2} class="center">
    <div className='task'>
      <div className='task-name'>     
       <h2 style={{textAlign:'center'}}> {name}</h2>
        <h4>{company}
        <br></br>
        {location}
        <div>
        <a href={applyhere}>Apply On Company Site !</a> 
       </div>
        <br></br>
        <br></br>
        {date}</h4>
      </div>
    </div>
    
    </Card>
  );
}

export default JobsAvailable;