
import React, { useState } from 'react';
import axios from 'axios';
import decode from 'jwt-decode';
import Card from '@material-ui/core/Card';
import './CardI.css';
import './SamPic.css';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
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

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    addr1: '',
    addr2: '',
    phn: '',
    city: '',
    state: '',
    edu: '',
    field: '',
    gpa: '',
    clg: '',
    edu2: '',
    field2: '',
    gpa2: '',
    clg2: '',
    exp1: '',
  });

  const { name, email, city, state, addr1, addr2, phn, edu, field, gpa, clg, edu2, field2, gpa2, clg2, exp1 } = formData;
  const onChange2 = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit2 = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    let data = {
      name: name,
      email: email,
      addr1: addr1,
      addr2: addr2,
      city: city,
      state: state,
      phn: phn,
      edu: edu,
      filed: field,
      gpa: gpa,
      clg: clg,
      edu2: edu2,
      filed2: field2,
      gpa2: gpa2,
      clg2: clg2,
      exp1: exp1,
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/formnew',
        data,
        config
      );
      localStorage.setItem('token', response.data.token);
      console.log(response);
      let decodeduser = decode(response.data.token);
      console.log(decodeduser);
    } catch (e) {
      console.log('error ', e);
    }
  };

  const classes = useStyles();
  const mystyle5 = {
    width: "auto",
    height: "100%",
    color: 'black',
    backgroundColor: "#927276",
    fontFamily: 'fantasy',
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
  };
  const mystyle2 = {
    width: "68%",
    height: "80%",
    color: 'black',
    backgroundColor: "white",
    fontFamily: "Arial, Helvetica, sans-serif",
    textAlign: 'left',
    justifyContent: 'left',
    alignContent: 'left',
  };
  return (
    <>
      {/* <Card className={classes.root} style={mystyle5} class="center">
        <h1>Build Your Resume</h1>
        <h2>Enter your details below</h2>
        <Card className={classes.root} style={mystyle2} class="center">

          <h2>What’s the best way for employers to contact you?</h2>
          <h4>We suggest including an email and phone number.</h4>
          <form onSubmit={(e) => onSubmit2(e)}>
            <div class='row'>
            <div class='col-lg-6'>
              <label for="fname">Name :</label>
              <input
                type='text'
                placeholder='Name'
                name='name'
                required
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div class='col-lg-6'>
            </div>
            </div>
            <div>
              <label for="fname">Email Address :</label>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">City :</label>
              <input
                type='text'
                placeholder='City'
                name='city'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">State :</label>
              <input
                type='text'
                placeholder='State'
                name='state'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">Address Line 1 :</label>
              <input
                type='text'
                placeholder='Address Line 1'
                name='addr1'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">Address Line 2 :</label>
              <input
                type='text'
                placeholder='Address Line 2'
                name='addr2'
                onChange={(e) => onChange2(e)}
              />
            </div>

            <div>
              <label for="fname">Phone Number :</label>
              <input
                type='text'
                placeholder='Please add your extension'
                name='phn'
                onChange={(e) => onChange2(e)}
              />
            </div>




            <br></br>
            <h2>Great, let’s work on your education!</h2>
            <h4>Select your highest level of education</h4>
            <div>
              <label for="fname">Education 1 :</label>
              <input
                type='text'
                placeholder='Education'
                name='edu'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">Field of Study :</label>
              <input
                type='text'
                placeholder='Field of Study'
                name='field'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">GPA :</label>
              <input
                type='text'
                placeholder='GPA'
                name='gpa'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">College Name :</label>
              <input
                type='text'
                placeholder='College Name'
                name='clg'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <br></br>
            <div>
              <label for="fname">Education 2:</label>
              <input
                type='text'
                placeholder='Education 2'
                name='edu2'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">Field of Study :</label>
              <input
                type='text'
                placeholder='Field of Study'
                name='field2'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">GPA :</label>
              <input
                type='text'
                placeholder='GPA'
                name='gpa2'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">College Name :</label>
              <input
                type='text'
                placeholder='College Name'
                name='clg2'
                onChange={(e) => onChange2(e)}
              />
            </div>

            <div>
              <br></br>
              <h2>Let’s talk about your experiences!</h2>
              <label for="exp1">Experience 1:</label>
              <br></br>
              <div>
              <textarea className='form-control rounded-0' id="story" name="exp1"
                rows="10" cols="50" onChange={(e) => onChange2(e)}
              >
                Add you experiences here!
              </textarea>
              </div>

              <br></br>
              <label for="story">Experience 2:</label>
              <br></br>
              <textarea className='form-control rounded-0' id="story" name="story"
                rows="10" cols="50"
               >
                Add you experiences here!
              </textarea>

              <br></br>
              <label for="story">Experience 3:</label>
              <br></br>
              <textarea className='form-control rounded-0' id="story" name="story"
                rows="10" cols="50"
               >
                Add you experiences here!
</textarea>
              <br></br>
              <label for="story">Experience 4:</label>
              <br></br>
              <textarea className='form-control rounded-0' id="story" name="story"
                rows="10" cols="50"
              >
                Add you experiences here!
</textarea>
            </div>


            <input type='submit' value='Register' />
          </form>


        </Card>
        <h3>Click here to see your RESUME!</h3>
            <h3><NavLink to='/apiform'><button type="button" class ="button4"><h2>RESUME TEPLATES</h2></button></NavLink></h3>


      </Card> */}

      {/* Removed card and replaced with div to create container for responsive */}
     <div style={{backgroundColor:'#C5A5AF'}}>
        <h1 style={{textAlign:'center', fontFamily:'fantasy', paddingTop:20}}>Build Your Resume</h1>
        <p style={{textAlign:'center', fontFamily:'fantasy', color:'#9e868b'}}>Enter your details below</p>
        <div className='container' style={{backgroundColor:'white'}}>
        <h2>What’s the best way for employers to contact you?</h2>
          <h4>We suggest including an email and phone number.</h4>
          <form onSubmit={(e) => onSubmit2(e)}>
            {/* Column Input */}
            <div class='row'>
            <div class='col-lg-6'>
              <label for="fname">Name :</label>
              <input
                type='text'
                placeholder='Name'
                name='name'
                required
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div class='col-lg-6'>
            </div>
            </div>
            <div>
              <label for="fname">Email Address :</label>
              <input
                type='email'
                placeholder='Email Address'
                name='email'
                onChange={(e) => onChange2(e)}
              />
            </div>
            {/* Column Input */}
            <div>
              <label for="fname">City :</label>
              <input
                type='text'
                placeholder='City'
                name='city'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">State :</label>
              <input
                type='text'
                placeholder='State'
                name='state'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">Address Line 1 :</label>
              <input
                type='text'
                placeholder='Address Line 1'
                name='addr1'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">Address Line 2 :</label>
              <input
                type='text'
                placeholder='Address Line 2'
                name='addr2'
                onChange={(e) => onChange2(e)}
              />
            </div>

            <div>
              <label for="fname">Phone Number :</label>
              <input
                type='text'
                placeholder='Please add your extension'
                name='phn'
                onChange={(e) => onChange2(e)}
              />
            </div>




            <br></br>
            <h2>Great, let’s work on your education!</h2>
            <h4>Select your highest level of education</h4>
            <div>
              <label for="fname">Education 1 :</label>
              <input
                type='text'
                placeholder='Education'
                name='edu'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">Field of Study :</label>
              <input
                type='text'
                placeholder='Field of Study'
                name='field'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">GPA :</label>
              <input
                type='text'
                placeholder='GPA'
                name='gpa'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">College Name :</label>
              <input
                type='text'
                placeholder='College Name'
                name='clg'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <br></br>
            <div>
              <label for="fname">Education 2:</label>
              <input
                type='text'
                placeholder='Education 2'
                name='edu2'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">Field of Study :</label>
              <input
                type='text'
                placeholder='Field of Study'
                name='field2'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">GPA :</label>
              <input
                type='text'
                placeholder='GPA'
                name='gpa2'
                onChange={(e) => onChange2(e)}
              />
            </div>
            <div>
              <label for="fname">College Name :</label>
              <input
                type='text'
                placeholder='College Name'
                name='clg2'
                onChange={(e) => onChange2(e)}
              />
            </div>

            <div>
              <br></br>
              <h2>Let’s talk about your experiences!</h2>
              <label for="exp1">Experience 1:</label>
              <br></br>
              <div>
              <textarea className='form-control rounded-0' id="story" name="exp1"
                rows="10" cols="50" onChange={(e) => onChange2(e)}
              >
                Add you experiences here!
              </textarea>
              </div>

              <br></br>
              <label for="story">Experience 2:</label>
              <br></br>
              <textarea className='form-control rounded-0' id="story" name="story"
                rows="10" cols="50"
               >
                Add you experiences here!
              </textarea>

              <br></br>
              <label for="story">Experience 3:</label>
              <br></br>
              <textarea className='form-control rounded-0' id="story" name="story"
                rows="10" cols="50"
               >
                Add you experiences here!
              </textarea>
              <br></br>
              <label for="story">Experience 4:</label>
              <br></br>
              <textarea className='form-control rounded-0' id="story" name="story"
                rows="10" cols="50"
              >
                Add you experiences here!
            </textarea>
            </div>

             
            <input type='submit' className='botton' value='Register' />
          </form>
        </div>
        <div style={{textAlign:'center', paddingBottom:10}}>
            <h3 style={{color:'black', fontFamily:'fantasy'}}>Click here to see your RESUME!</h3>
            <h3><NavLink to='/apiform'><button type="button" class ="button4"><h2 style={{color:'black', fontFamily:'fantasy'}}>RESUME TEPLATES</h2></button></NavLink></h3>
        </div>
      </div>
    </>
  );
};

export default Register;

