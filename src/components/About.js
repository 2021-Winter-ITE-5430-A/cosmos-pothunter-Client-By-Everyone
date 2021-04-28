import React, { useEffect, useState } from "react";
import axios from "axios";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    axios.get("https://ismaila-server.herokuapp.com/api/abouts")
       .then((resData) => { 
      setAbouts(resData.data);
      console.log(resData);
    });
  }, []);
 

  return (
    <div style={{marginTop:'20px'}}> 
      {abouts.map((about) => (
        <div className="about-section" key={about._id}>      
          <p>{about.title}</p>
          <p>History: {about.history}</p>
          <p>Services: {about.services}</p> 
        </div>
      ))}
    </div>
  );
};
export default About;