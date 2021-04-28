import React, { useState } from 'react';
import axios from 'axios';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 600,
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

const divCenter={  
    margin: "auto",
    width: "50%",    
    padding: "10px"
  };

  const divItemCenter={  
    margin: "auto",     
    padding: "5px"
  };



const EmploymentService = () => {
  const [employment, setEmployment] = useState([]);


  //http://localhost:3000/recruitingAgencis.json
  axios.get('https://soumitra-serverapi.herokuapp.com/api/agency').then((response) => {
    setEmployment(response.data);
    
  });
  

  return (
    <div style={divCenter}>
      <h2>List of Employement Service Provider</h2>

      {employment.map((item) => (
        <div style={divItemCenter}>
        <EmploymentItem employment={item} key={item.id} />
        </div>
      ))}
    </div>
  );
};

const EmploymentItem = (props) => {

  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className="container">
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {props.employment.type}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.employment.name}
          </Typography>

          <Typography variant="body2" component="p">
            {props.employment.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
        </Button>
          <span>{props.employment.address},<span> </span> {props.employment.City},<span> </span>{props.employment.Provinces},<span> </span>{props.employment.postCode}</span>
        </CardActions>
      </Card>
    </div>
  );
};
export default EmploymentService;