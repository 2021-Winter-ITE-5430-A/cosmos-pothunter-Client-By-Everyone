import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    Width: "50%",
    height: "auto",
    boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fafafa",
  },
  media: {
    height: 300,
  },

  row: 
  {
    width: "100%"
  }

});

function MainHead() {

  const classes = useStyles();
  const mystyle2 = {
    width: "auto",
    height: "100%",
  };
  const mystyle3 = {
    width: "100%",
    height: "100%",
  };

  return (

    <Grid container spacing={2} style={mystyle2}>
      <div class="column">
        <Card className={classes.card} style={mystyle3}>
         <div>
          <h3>Top Rated Resume Template</h3>;
           <img src ={require('../img/res4.jpg')} height = {500} width={"100%"} alt={"resume1"}  />      
         </div>
         <CardContent>
           <Typography color="primary" >
           <h5> {'resume template:1'}</h5>
         </Typography>
         </CardContent>
        </Card>
     </div>
    </Grid>
  )
}

export default MainHead;
