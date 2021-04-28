import React from 'react';
import {  NavLink } from 'react-router-dom';

function Header(){
  return (
<nav className="navbar">
  <div className="navbar__body">
    <div className="navbar__slot">
      <div className="navbar__logo">
      <p>Logo</p>
              </div>
    </div>
    <div className="navbar__slot desktop-only nav-list">
      <div className="guest">
      <NavLink exact activeClassName='is-active' to='/'>Home</NavLink>

      <NavLink activeClassName='is-active' to='/mentorsphoto'>
            Mentor's Photo 
          </NavLink>
          <NavLink activeClassName='is-active' to='/mentorsBio'>
           Mentor Bio
          </NavLink> 
          <NavLink activeClassName='is-active' to='/mentorsQuestion'>
            Questions for Mentors 
          </NavLink>  

          {/* Added Menu By Soumitra */} 
          <NavLink activeClassName='is-active' to='/employmentService'>
            Employment Service 
          </NavLink>  
          <NavLink activeClassName='is-active' to='/successStory'>
            User Success Story 
          </NavLink> 
          <NavLink activeClassName='is-active' to='/mentorsRating'>
            Mentors Rating 
          </NavLink> 
          <NavLink activeClassName='is-active' to='/about'>
            About 
          </NavLink>
          <NavLink activeClassName='is-active' to='/contact'>
            Contact Us 
          </NavLink>
          
          {/* Added Menu By Shelcy */} 
          <NavLink activeClassName='is-active' to='/ResumeFAQ'>
            Resume FAQ
          </NavLink>
          <NavLink activeClassName='is-active' to='/reviewCard'>
            Resume Templates
          </NavLink>
          <NavLink activeClassName='is-active' to='/jobapi'>
            Jobs
          </NavLink>
          <NavLink activeClassName='is-active' to='/userlogin'>
            Action Words
          </NavLink>
          <NavLink activeClassName='is-active' to='/formNew'>
           Build Resume
          </NavLink>
      
       </div>
    </div>
  </div>
</nav>
  );
}
export default Header;