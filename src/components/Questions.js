import React from 'react';
import Card from '@material-ui/core/Card';

function Questions({ id, question, cmt, removeQ }) {
  const mystyle3 = {
    width: "70%",
    height: "70%",
    backgroundColor: "#F5F3F5",
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    padding: '30px'
  };
  return (
  
    <div className='question'>
      <div className='question-name'>
        <br></br>
        <br></br>
        <Card  style={mystyle3} class="center">
        <h3>{question}</h3>
        <h4>{cmt}</h4>
        </Card>
        <br></br>
      </div>
    </div>
    
  );
}

export default Questions;