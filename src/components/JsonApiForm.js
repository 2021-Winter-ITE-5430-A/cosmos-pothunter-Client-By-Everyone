import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';



const JsonApiForm = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://pothunter-shel-server.herokuapp.com/api/formnew').then((response) => {
      setPosts(response.data);
      console.log(response);
    });

  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

const mystyle5 = {
  width: "90%",
  height: "20%",
  color: 'black',
  textAlign: 'left',
  backgroundColor: "#B5CDBB",
  fontFamily: 'Helvetica Neue", Helvetica, Arial, sans-serif',
  justifyContent: 'left',
  alignContent: 'left',
  padding: '30px'
};
const mystyle4 = {
  width: "50%",
  height: "20%",
  color: 'black',
  backgroundColor: "white",
  fontFamily: 'Helvetica Neue", Helvetica, Arial, sans-serif',
  textAlign: 'left',
  justifyContent: 'left',
  alignContent: 'left',
  padding: '30px'
};
const mystyle2 = {
  width: "50%",
  height: "5%",
  color: 'black',
  backgroundColor: "white",
  fontFamily: 'Helvetica Neue", Helvetica, Arial, sans-serif',
  textAlign: 'center',
  justifyContent: 'left',
  alignContent: 'left',
  padding: '30px'
};
const Post = (props) => {
  return (

    <Card style={mystyle5} class="center">

      <div style={{backgroundColor:'white', textAlign:'center'}}>
        <div style={{display:'flex', justifyContent:'center'}}>
        <div className='card' id="apiFormCard">
          <h3>{props.post.name} </h3>
          <h3>{props.post.addr1}, {props.post.addr2} , {props.post.city}, {props.post.state} , {props.post.zip}</h3>
          <h3> {props.post.email} |  {props.post.phn}</h3>
        </div >
        </div>
        <p>----------------------------------------------------------------------------------------------------------------------------------------------</p>

        <h2>Education and Professional Certifications</h2>
        <h3>---------------------------------------------------------------------------------------------------------</h3>
        <h3>{props.post.edu} - {props.post.field} (April 2020)</h3>
        <h4>  {props.post.clg} - GPA: {props.post.gpa}</h4>

        <h3>{props.post.edu2} - {props.post.field2} (Sep 2015)</h3>
        <h4>  {props.post.clg2} - GPA: {props.post.gpa2}</h4>

        <h2>Professional Experiences</h2>
        <h3>---------------------------------------------------------------------------------------------------------</h3>
        <h3>  BEYOND SHELTER, Minneapolis, MN </h3>
        <h3> Program Manager, September 2015–present </h3>

        <li>Oversee a team of 10 direct and 70 indirect staff to manage a large-scale community development program consisting of 200 community events with a $4 million program budget</li>
        <li>Devise program goals and continually assess and align those goals to complete successful program events and objectives</li>
        <li>Manage the professional development and training of staff, including internal program and staff evaluations, to drive productivity and effectiveness</li>
        <li>Successfully organize workshops and training events for 2,000+ participants</li>

        <h3>UNITED HEALTH GROUP, Plymouth, MN</h3>
        <h3>Program Manager, Continuous Improvement, June 2011–August 2015</h3>
        <li>Managed scheduling, budgeting, and performance of a diverse range of continuous improvement projects with a high degree of business risk</li>
        <li>Oversaw a team of 15 project managers with a program budget of $12 million</li>
        <li>Worked closely with executive leadership to strategize innovative business processes and technology initiatives, resulting in a 47% improvement in operational efficiency</li>
        <li>Developed effective plans for managing and retaining talent inside the organization and for improving leadership strength</li>
        <h2>Volunteer Experiences</h2>

        <h3>---------------------------------------------------------------------------------------------------------</h3>
        <li>Successfully organize workshops and training events for 2,000+ participants</li>
        <h3>STONY BROOK MEDICINE, Stony Brook, NY</h3>
        <h3>Project Coordinator, August 2016–present</h3>
        <li>Analyze financial impact of transportation expenses on the department’s budget and propose ways to reduce costs and improve services</li>
        <li>Use pivot tables and v-lookup to track SharePoint data, as well as GoToMeeting to organize virtual meetings and webinars</li>
        <li>Reduced indigent patient fund expenditure by over $9,000</li>
        <li>Improved department productivity and functionality by facilitating training for department staff learning to use new EMR modules</li>

      </div>
    </Card>
  );
};
export default JsonApiForm;
