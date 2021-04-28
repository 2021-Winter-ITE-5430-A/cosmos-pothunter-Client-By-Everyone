import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    padding: '20px 20px',
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgb(180, 180, 180)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState(1);
  const [questions, setQuestions] = useState([]);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  useEffect(() => {
    axios.get('https://project-server-loveleen.herokuapp.com/api/faqs').then((response) => {
        setQuestions(response.data);
        console.log(response);
    });
  }, []);

  return (
    <div>
      <h2 className='center-header'>Frequently asked Question (FAQs)</h2>
      {questions.map((props) => (
        <Accordion square expanded={expanded === props.quesId} onChange={handleChange(props.quesId)}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>{props.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            {props.answer}
          </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
