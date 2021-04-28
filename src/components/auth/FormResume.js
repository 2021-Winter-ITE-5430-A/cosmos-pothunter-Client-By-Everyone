import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import Card from '@material-ui/core/Card';
import './CardI.css';
import './SamPic.css';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';


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

const FormResume = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        addr1: '',
        addr2: '',
        city: '',
        state: '',
        zip: '',
        phn: '',
        email2: '',
        edu: '',
        field: '',
        gpa: '',
        clg: '',
        edu2: '',
        field2: '',
        gpa2: '',
        clg2: '',
    });

    const { fname, lname, addr1, addr2, city, state, zip, email2, phn, edu, field, gpa,clg, edu2,field2,clg2,gpa2 } = formData;
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
  
            fname: fname,
            lname: lname,
            addr1: addr1,
            addr2: addr2,
            city: city,
            state: state,
            zip: zip,
            phn: phn,
            email2: email2,
            edu: edu,
            field: field,
            gpa: gpa,
            clg: clg,
            edu2: edu2,
            field2: field2,
            gpa2: gpa2,
            clg2: clg2,
        };

        // try {
        //     const response = await axios.post(
        //       'http://localhost:5000/api/forms',
        //       data,
        //       config
        //     );
        //     console.log('Resume added');
        //   } catch (e) {
        //     console.log(e.response.data.errors);
        //   }
        // };
        try {
            const response = await axios.post(
                'http://localhost:5000/api/forms',
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
        color: '#9e868b',
        backgroundColor: "#C5A5AF",
        fontFamily: 'fantasy',
        textAlign: 'center',
        justifyContent: 'left',
        alignContent: 'left',
        padding: '30px'
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
        padding: '30px'
    };
    return (
        <>
      {/* Removed card and replaced with div to create container for responsive */}

        <div style={{backgroundColor:'#C5A5AF'}}>
                <h1 style={{textAlign:'center', fontFamily:'fantasy', paddingTop:20}}>Build Your Resume</h1>
                <p style={{textAlign:'center', fontFamily:'fantasy', color:'#9e868b'}}>Enter your details below</p>
                <div className='container' style={{backgroundColor:'white'}}>
                    <h2>What’s the best way for employers to contact you?</h2>
                    <h4>We suggest including an email and phone number.</h4>
                    <form onSubmit={(e) => onSubmit2(e)}>
                    <div class="row">
                        <div class="col-lg-4">
                                <label for="fname">First Name :</label><input
                                    className='formCol'
                                    type='text'
                                    placeholder='First Name'
                                    name='fname'
                                    required
                                    onChange={(e) => onChange2(e)}
                                />
                        </div>
                        <div class="col-lg-4">
                                <label for="fname">Last Name :</label><input
                                    className='formCol'
                                    type='text'
                                    placeholder='Last Name'
                                    name='lname'
                                    required
                                    onChange={(e) => onChange2(e)}
                                />
                        </div>
                    </div>

                    <br></br>


                    <div class="row">
                        <div class="col-lg-4">
                            <div>
                                Address Line 1 :<input
                                    type='text'
                                    placeholder='Address Line1'
                                    name='addr1'
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div>
                                Address Line 2 :<input
                                    type='text'
                                    placeholder='Address Line2'
                                    name='addr2'
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                        </div>
                        <div class='col-lg-4'>
                        </div>
                    </div>


                    <br></br>
                    <div class="row">
                        <div class="col-lg-4">
                            <div>
                                <label>City:</label>
                                <br></br>
                                <input
                                    type='text'
                                    placeholder='Brampton'
                                    name='city'
                                    required
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div>
                                <label for="state">State/Province :</label>
                                <input
                                    type='text'
                                    placeholder='ON'
                                    name='state'
                                    required
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div>
                                <label for="zip">Zip Code :</label><input
                                    type='text'
                                    placeholder='L7A 4Y2'
                                    name='zip'
                                    required
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <div class="row">
                        <div class="col-lg-4">
                            <div>
                                Email Address :<input
                                    type='text'
                                    placeholder='Email Address'
                                    name='email2'
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div>
                                Phone Number :<input
                                    type='text'
                                    placeholder='Phone Number'
                                    name='phn'
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                        </div >
                    </div>
                    <br></br>
                    <h2>Great, let’s work on your education!</h2>
                    <h4>Select your highest level of education</h4>
                    <div class="row">
                        <div class="col-lg-4">
                            <div>

                                <label for="edu">Degree :</label>
                                <br></br>
                                <select name="edu">
                                    <option value="edu1">Diploma</option>
                                    <option value="edu2">Bachelors Degree</option>
                                    <option value="edu3">Post Graduate Diploma</option>
                                    <option value="edu4">Masters Degree</option>
                                    <option value="edu5">Phd</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div>
                                <label for="field">Field of Study :</label><input
                                    type='text'
                                    placeholder='Major'
                                    name='field'
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                    <div class="col-lg-4">
                        <div>
                            <label for="gpa">GPA :</label>
                            <br></br>
                            <input
                                type='text'
                                placeholder='/4'
                                name='gpa'
                                onChange={(e) => onChange2(e)}
                            />
                        </div>
                        </div>
                        <div class="col-lg-4">
                            <div>
                                <label for="clg">College Name :</label><input
                                    type='text'
                                    placeholder='College'
                                    name='clg'
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <h4>Select your second highest level of education</h4>
                    <div class="row">
                        <div class="col-lg-4">
                            <div>

                                <label for="edu2">Degree :</label>
                                <br></br>
                                <select name="edu">
                                    <option value="edu21">Diploma</option>
                                    <option value="edu22">Bachelors Degree</option>
                                    <option value="edu23">Post Graduate Diploma</option>
                                    <option value="edu23">Masters Degree</option>
                                    <option value="edu23">Phd</option>
                                </select>
                            </div>
                            <br></br>
                        </div>
                        <div class="col-lg-4">
                            <div>
                                <label for="field2">Field of Study :</label><input
                                    type='text'
                                    placeholder='Major'
                                    name='field2'
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div class="row">
                    <div class="col-lg-4">
                        <div>
                            <label for="gpa2">GPA :</label>
                            <br></br>
                            <input
                                type='text'
                                placeholder='/4'
                                name='gpa2'
                                onChange={(e) => onChange2(e)}
                            />
                        </div>
                        </div>
                        <div class="col-lg-4">
                            <div>
                                <label for="clg2">College Name :</label><input
                                    type='text'
                                    placeholder='College'
                                    name='clg2'
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                        </div>
                    </div>
                    <br></br>

                    <input type='submit' value='Register' />
                    </form>
                </div> 
        </div>

            {/* <Card className={classes.root} style={mystyle5} class="center">
                <h1>Build Your Resume</h1>
                <p>Enter your details below</p>
                <Card className={classes.root} style={mystyle2} class="center">

                    <h2>What’s the best way for employers to contact you?</h2>
                    <h4>We suggest including an email and phone number.</h4>
                    <form onSubmit={(e) => onSubmit2(e)}>

                        <div class="row">
                            <div class="col-lg-4">
                                    <label for="fname">First Name :</label><input
                                        className='formCol'
                                        type='text'
                                        placeholder='First Name'
                                        name='fname'
                                        required
                                        onChange={(e) => onChange2(e)}
                                    />
                            </div>
                            <div class="col-lg-4">
                                    <label for="fname">Last Name :</label><input
                                        className='formCol'
                                        type='text'
                                        placeholder='Last Name'
                                        name='lname'
                                        required
                                        onChange={(e) => onChange2(e)}
                                    />
                            </div>
                        </div>

                        <br></br>


                        <div class="row">
                            <div class="col-lg-4">
                                <div>
                                    Address Line 1 :<input
                                        type='text'
                                        placeholder='Address Line1'
                                        name='addr1'
                                        onChange={(e) => onChange2(e)}
                                    />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    Address Line 2 :<input
                                        type='text'
                                        placeholder='Address Line2'
                                        name='addr2'
                                        onChange={(e) => onChange2(e)}
                                    />
                                </div>
                            </div>
                        </div>


                        <br></br>
                        <div class="row">
                            <div class="col-lg-4">
                                <div>
                                    <label for="city">City :</label>
                                    <input
                                        type='text'
                                        placeholder='Brampton'
                                        name='city'
                                        required
                                        onChange={(e) => onChange2(e)}
                                    />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <label for="state">State/Province :</label>
                                    <input
                                        type='text'
                                        placeholder='ON'
                                        name='state'
                                        required
                                        onChange={(e) => onChange2(e)}
                                    />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <label for="zip">Zip Code :</label><input
                                        type='text'
                                        placeholder='L7A 4Y2'
                                        name='zip'
                                        required
                                        onChange={(e) => onChange2(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <br></br>

                        <div class="row">
                            <div class="col-lg-4">
                                <div>
                                    Email Address :<input
                                        type='text'
                                        placeholder='Email Address'
                                        name='email2'
                                        onChange={(e) => onChange2(e)}
                                    />
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    Phone Number :<input
                                        type='text'
                                        placeholder='Phone Number'
                                        name='phn'
                                        onChange={(e) => onChange2(e)}
                                    />
                                </div>
                            </div >
                        </div>
                        <br></br>
                        <h2>Great, let’s work on your education!</h2>
                        <h4>Select your highest level of education</h4>
                        <div class="row">
                            <div class="col-lg-4">
                                <div>

                                    <label for="edu">Degree :</label><select name="edu">
                                        <option value="edu1">Diploma</option>
                                        <option value="edu2">Bachelors Degree</option>
                                        <option value="edu3">Post Graduate Diploma</option>
                                        <option value="edu4">Masters Degree</option>
                                        <option value="edu5">Phd</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <label for="field">Field of Study :</label><input
                                        type='text'
                                        placeholder='Major'
                                        name='field'
                                        onChange={(e) => onChange2(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                        <div class="col-lg-4">
                            <div>
                                <label for="gpa">GPA :</label><input
                                    type='text'
                                    placeholder='/4'
                                    name='gpa'
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <label for="clg">College Name :</label><input
                                        type='text'
                                        placeholder='College'
                                        name='clg'
                                        onChange={(e) => onChange2(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <h4>Select your second highest level of education</h4>
                        <div class="row">
                            <div class="col-lg-4">
                                <div>

                                    <label for="edu2">Degree :</label><select name="edu">
                                        <option value="edu21">Diploma</option>
                                        <option value="edu22">Bachelors Degree</option>
                                        <option value="edu23">Post Graduate Diploma</option>
                                        <option value="edu23">Masters Degree</option>
                                        <option value="edu23">Phd</option>
                                    </select>
                                </div>
                                <br></br>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <label for="field2">Field of Study :</label><input
                                        type='text'
                                        placeholder='Major'
                                        name='field2'
                                        onChange={(e) => onChange2(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                        <div class="col-lg-4">
                            <div>
                                <label for="gpa2">GPA :</label><input
                                    type='text'
                                    placeholder='/4'
                                    name='gpa2'
                                    onChange={(e) => onChange2(e)}
                                />
                            </div>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <label for="clg2">College Name :</label><input
                                        type='text'
                                        placeholder='College'
                                        name='clg2'
                                        onChange={(e) => onChange2(e)}
                                    />
                                </div>
                            </div>
                        </div>
                        <br></br>
  
                        <input type='submit' value='Register' />
                    </form>
                </Card>
                <p>
                    Already have an account? <Link to='/login'>Sign In</Link>
                </p>

            </Card> */}

        </>
    );
};

export default FormResume;
