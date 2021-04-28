// //final master copy
import React, { Fragment, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { NavLink, Link } from "react-router-dom";
import { Button, Dropdown, Menu } from "antd";
import { PicCenterOutlined } from "@ant-design/icons";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


function NavigationBar() {
  const auth = useContext(AuthContext);
  
  console.log(auth,'AUTH')
  return (
    //Created New Navbar
    // Used Dropdown from Bootstrap
    <Navbar className="navClass" collapseOnSelect expand="lg">
  <Navbar.Brand href="#home"><img src="/img/Capture1.JPG" style={{width:'90px',height:' 60px', borderRadius: '5px'}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        <Nav.Link style={{color:'white'}}><NavLink activeStyle={{color:'blue'}} style={{color:'white'}} to="/">Home</NavLink></Nav.Link>
      {
        //Check if user is logged in or not
        !auth.isLoggedIn && <Nav.Link style={{color:'white'}}><NavLink activeStyle={{color:'blue'}} style={{color:'white'}} to="/login">Login</NavLink></Nav.Link>
      }
      {
        //Check if user is logged in or not
        !auth.isLoggedIn && <Nav.Link style={{color:'white'}}><NavLink activeStyle={{color:'blue'}} style={{color:'white'}} to="/register">Register</NavLink></Nav.Link>
      }
      
      {/* Dropdown for About */}
      <NavDropdown title="About Us" id="collasible-nav-dropdown">
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/about">About</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/contact">Contact</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/successStory">Success Story</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/Faqs">FAQ</NavLink></NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>


      {/* Dropdown for Mentor */}
      <NavDropdown title="Mentor" id="collasible-nav-dropdown">
        {/* <NavDropdown.Item>Mentor</NavDropdown.Item> */}
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/MentorsPhoto">Mentor's Photo</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/MentorsBio">Mentor's Bio</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/MentorsQuestion">Mentor's Questions</NavLink></NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>

      {/* Dropdown for Jobs */}
      <NavDropdown title="Jobs" id="collasible-nav-dropdown">
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/Jobs">Find Jobs</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/jobapi">Jobs</NavLink></NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>


      {/* Dropdown for Services */}
      <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/employmentService">Employment Services</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/InterviewToolkit">Inverview Tool Kit</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/mentorsRating">Ratings</NavLink></NavDropdown.Item>
       
        <NavDropdown.Divider />
      </NavDropdown>

      {/* Dropdown for Template */}
      <NavDropdown title="Template" id="collasible-nav-dropdown">
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/templates">CV Template Photo</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/DownloadTemplate">Download Template</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/ReviewCard">Resume Templates</NavLink></NavDropdown.Item>
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/ResumeFaq">Resume FAQ</NavLink></NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>

      {/* Dropdown for API */}
      <NavDropdown title="Action Words" id="collasible-nav-dropdown">
      <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/userlogin">Action Words</NavLink></NavDropdown.Item>
        {/* <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/api">Action Words1</NavLink></NavDropdown.Item> */}
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/apiform">PopulatedResumeTemplates</NavLink></NavDropdown.Item>
        {/* <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/form">Form</NavLink></NavDropdown.Item> */}
        <NavDropdown.Item><NavLink activeStyle={{color:'blue'}} style={{color:'black'}} to="/formNew">Build Resume</NavLink></NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
    </Nav>
    <Nav>
    {auth.isLoggedIn && (
      //Show logout if user is logged in
      <button style={{backgroundColor:'black', borderRadius:'25px', borderColor:'white'}}>
      <Nav.Link href="/login" style={{color:'white'}}>Logout</Nav.Link>
      </button>
    )}
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavigationBar