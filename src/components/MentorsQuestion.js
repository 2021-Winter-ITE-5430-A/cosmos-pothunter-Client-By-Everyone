import React, { useEffect, useState } from "react";
import axios from "axios";

const MentorsQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [comments, setComments] = useState("");
  const [questionSubmitted, setQuestionSubmitted] = useState(false);

  useEffect(() => {
    axios.get("https://project-server-mary.herokuapp.com/api/QA").then((resData) => {
      setQuestions(resData.data);
      console.log(resData);
    });
  }, []);

  const handleQuestionSubmit = (evt) => {
    evt.preventDefault();
    const question = {
      name:name,
      email:email,
      website:website,
      question:comments
    }
    axios.post("https://project-server-mary.herokuapp.com/api/menteesQuestion",question).then(res=>{
      setQuestionSubmitted(true)
      setComments("")
      setEmail("")
      setName("")
      setWebsite("")
      setTimeout(()=>{
        setQuestionSubmitted(false)        
      },10000)
    })
  }

  return (
    <div>
      <div className="questions-section-heading">Mentors Question</div>
      {questions.map((ques, i) => (
        <div className="question-section" key={ques._id}>
          <p className="question">
            Q{i + 1}: {ques.question}
          </p>
          <p>Ans: {ques.answer}</p>
        </div>
      ))}
      
      <form className="question-form" onSubmit={handleQuestionSubmit}>
      {
        questionSubmitted && <div>
        Question Submitted !!!! Thank you.!!
      </div>
      }
        <h4>Leave a Question</h4>
        <p>Question</p>
        <textarea rows="10" name="comments" 
        value={comments}
        onChange={e=>setComments(e.target.value)}></textarea>
        {/* <div className="comment-form-fields">
        <div className="question-form">  */}
        	&nbsp;
        <div className="question"> 
        
        
          <div>
            <label>Name	&nbsp;	&nbsp; &nbsp;</label>
            <input type="text" name="name" value={name}  onChange={e=>setName(e.target.value)}></input>
          </div>
          <div>
            <label>Email 	&nbsp;	&nbsp;	&nbsp;</label>
            <input type="email" name="email" value={email}  onChange={e=>setEmail(e.target.value)}></input>
          </div>
          <div>
            <label>Website	&nbsp;</label>
            <input type="text" name="website" value={website}  onChange={e=>setWebsite(e.target.value)}></input>
          </div>
        </div>
        <button className="post-button-question" name="submit">Post Question</button>
      </form>
    </div>
  );
};

export default MentorsQuestion;
