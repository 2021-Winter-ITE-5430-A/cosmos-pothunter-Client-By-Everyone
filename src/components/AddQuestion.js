import React, { useState } from 'react';
import './NavCs.css';

const AddQuestion = (props) => {
  const [question, setName] = useState('');

  const handleValueChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question === '') return;
    setName('');
  };
  return (
    <div className="container" style={{display:'flex', justifyContent:'center'}}>
      <div className="card" style={{padding:'20px'}}>
      <div className='add-question'><h3>Ask Questions!!</h3></div>
      <form onSubmit={handleSubmit}>
        <br/>
        <input
        className="form-control"
        type="text"
          placeholder='Question'
          value={question}
          onChange={handleValueChange}
          size="50"
        />
        <br/>

        
        <input className='addSubmit' type='submit' value='Add Question' />
      </form>
      </div>
    </div>
  );
};

export default AddQuestion;