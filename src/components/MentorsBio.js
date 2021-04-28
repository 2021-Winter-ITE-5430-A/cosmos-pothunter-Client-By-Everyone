import React, { useEffect, useState } from "react";

const MentorsBio = () => {
  const [mentorsBios, setMentorsBio] = useState([]);
  useEffect(() => {
    fetch("https://project-server-mary.herokuapp.com/api/mentorsBio")
      .then((res) => res.json())
      .then((resData) => {
        setMentorsBio(resData);
        console.log(resData)
      });
  },[]);
  const handleOnMentorsBioClick = (item) => {
    console.log("click", item);
  };

  return (
    <div>
      <div className="mentors-photo-heading">Mentor's Bio</div>
      <div className="mentorbio-cards">
        {mentorsBios.map((mentorsBio) => {
          return (
            <div              
              key={mentorsBio._id}
              onClick={() => handleOnMentorsBioClick(mentorsBio.mentorsLinkedInUrl)}>          
              <div className="mentorbio-card">
                <p className= "mentorbio-name">{mentorsBio.mentorsName}</p>
                <p className="mentorsbio-details">{mentorsBio.mentorsProf}</p>
                <a href={mentorsBio.mentorsLinkedInUrl} target="_blank">
                <img height="30" width="30" src="https://image.flaticon.com/icons/png/512/174/174857.png" />

                </a>  
                            
                </div>
            </div>
          );
        })}
        </div>
      </div>
  );
};

export default MentorsBio;
