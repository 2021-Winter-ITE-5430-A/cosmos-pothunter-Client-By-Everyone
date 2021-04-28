import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import './SamPic.css';
import res1 from '../img/res1.jpg'
import res2 from '../img/res2.jpg'
import res3 from '../img/res3.jpg'
import res8 from '../img/res8.JPG'
import res9 from '../img/res9.JPG'
import res10 from '../img/res10.JPG'
import res11 from '../img/res11.JPG'
import res12 from '../img/res12.JPG'
import res13 from '../img/res13.JPG'





const useStyles = makeStyles({
  card: {
    Width: "1000px",
    height: "500px",
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

function CardImg() {



  const classes = useStyles();
  const mystyle2 = {
    width: "auto",
    height: "100%",
  };
  const mystyle3 = {
    width: "auto",
    height: "auto",
    backgroundColor: "#908494",
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    padding: '30px'
  };
  return (
    <div>
      <div className='card' style={mystyle3} class="center">
      {/* <Container> */}
        <Typography
          color="white"
          gutterBottom
          variant="h3"
          align="center"
        >
        Top Rated Resume Templates of 2021{" "}
        </Typography>
        <div className='row' style={{marginTop:20}}>
          <div className='col-lg-4' style={{marginBottom:10}}>
            <img src ={res1} width={"100%"} alt={"resume1"} />      
          </div>
          <div className='col-lg-4' style={{marginBottom:10}}>
            <img src ={res2} width={"100%"} alt={"resume1"} />      
          </div>
          <div className='col-lg-4' style={{marginBottom:10}}>
            <img src ={res3} width={"100%"} alt={"resume1"} />      
          </div>
        </div>
        <div className='row' style={{marginTop:20}}>
          <div className='col-lg-4' style={{marginBottom:10}}>
            <img src ={res8} width={"100%"} alt={"resume1"} />      
          </div>
          <div className='col-lg-4' style={{marginBottom:10}}>
            <img src ={res9} width={"100%"} alt={"resume1"} />      
          </div>
          <div className='col-lg-4' style={{marginBottom:10}}>
            <img src ={res10} width={"100%"} alt={"resume1"} />      
          </div>
        </div>
        <div className='row' style={{marginTop:20}}>
          <div className='col-lg-4' style={{marginBottom:10}}>
            <img src ={res11} width={"100%"} alt={"resume1"} />      
          </div>
          <div className='col-lg-4' style={{marginBottom:10}}>
            <img src ={res12} width={"100%"} alt={"resume1"} />      
          </div>
          <div className='col-lg-4' style={{marginBottom:10}}>
            <img src ={res13} width={"100%"} alt={"resume1"} />      
          </div>
        </div>
        
        {/* <div class="row">
         <Grid container spacing={2} style={mystyle2}>
            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res1.jpg')} height = {500} width={"100%"} alt={"resume1"} />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res2.jpg')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res3.jpg')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>
          </Grid>
        </div>
        <br></br>
        <br></br>
        <div class="row">
         <Grid container spacing={2} style={mystyle2}>
            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res8.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res9.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res10.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>
          </Grid>
        </div>
        <br></br>
        <br></br>
        <div class="row">
         <Grid container spacing={2} style={mystyle2}>
            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res5.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res6.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res7.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>
          </Grid>
        </div>
        <br></br>
        <br></br>
        <div class="row">
         <Grid container spacing={2} style={mystyle2}>
            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res11.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res12.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res13.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>
          </Grid>
        </div>
        <br></br>
        <br></br>
        <div class="row">
         <Grid container spacing={2} style={mystyle2}>
            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res14.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res15.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>

            <div class="column">
              <Card className={classes.card}>
                <div>
                <img src ={require('../img/res16.JPG')} height = {500} width={"100%"} alt={"resume1"}  />      
                </div>
              </Card>
            </div>
          </Grid>
        </div> */}


           
      {/* </Container> */}
      </div>
    </div>
  );
}

export default CardImg;