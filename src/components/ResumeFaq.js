
import React, { useState } from 'react';
import Questions from './Questions';
import AddQuestion from './AddQuestion';
import Search from './Search';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import './SamPic.css';

const ResumeFaq = () => {
  const [lists, setLists] = useState([
    {
      question: '1. What if I need help creating a resume in a different file format?',
      cmt: 'Most jobs will accept your resume in a Word document or PDF format, but in some cases, you may need to apply for a job by filling out a form on the company website with your resume details, or even submitting your resume within the body of an email. In these cases, you’ll need a text version of your resume. Don’t sweat it — our text resume format page will walk you through the process of creating a text document. We also have a guide to using our templates in Google Docs.',
      id: 1,
    },
    {
        question: '2. Should I include information about special interests, activities and hobbies?',
        cmt: 'Don’t include anything irrelevant to the job you’re applying for. That includes your marital status, children, hobbies, jobs from over 10 years ago and nonprofessional memberships. Everything on your resume must support your fit for the job you want. Save your outside interests for the job interview. The major exception is if you lack work experience but can demonstrate through your extracurricular activities and internships that you’ve had experience in areas that are important for the job.',
        id: 1,
    },

    {
        question: '3. What’s the right length for a resume?',
        cmt: 'Your length will depend on your specific skills and experiences, and what the job is looking for. If the job calls for extensive experience (more than five years), then two pages is a good limit to shoot for, with plenty of room to accommodate your job history. For less senior jobs, usually one page will be all you need to present all your qualifications. For more tips on resume length, see our article How to Write the Perfect Resume in Two Pages.',
        id: 1,
    },
    
    {
        question: '4. How do you adjust your template to get the right resume format?',
        cmt: 'Your First, figure out which resume format (chronological, combination and functional) is best for your needs. Based on our examples for each format, you can then arrange each section of your resume using our resume builder to fit the format. For example, if you’re creating a functional resume, simply move your skills section underneath your summary statement, and add additional skills subcategories if needed. will depend on your specific skills and experiences, and what the job is looking for. If the job calls for extensive experience (more than five years), then two pages is a good limit to shoot for, with plenty of room to accommodate your job history. For less senior jobs, usually one page will be all you need to present all your qualifications. For more tips on resume length, see our article How to Write the Perfect Resume in Two Pages.',
        id: 1,
    },
    
    {
        question: '5. What are other ways to make my resume stand out? length for a resume?',
        cmt: 'Be sure to use strong action verbs when describing your work achievements. Writing “managed” or “oversaw” makes more of an impact than writing “was responsible for” or “was tasked with.',
        id: 1,
    },
  ]);
  const [search, setSearch] = useState('');
  const filterQuestions = (question) => {
    if (question) {
      setSearch(question);
    } else {
      setSearch('');
    }
    // setFilterList(
    //   lists.filter((t) => t.name.toLowerCase().includes(name.toLowerCase()))
    // );
  };

  let previd = 4;
  const handleAddQ = (question, cmt) => {
    setLists((prevState) => [
      ...prevState,
      {
        question: question,
        cmt: cmt,
        id: (previd += 1),
      },
    ]);

    //setFilterList(lists);
  };
  const handleRemoveQ = (id) => {
    setLists((prevState) => prevState.filter((t) => t.id !== id));
  };


  const useStyles = makeStyles({
    card: {
      Width: "1000px",
      height: "100%",
      boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
      backgroundColor: "#fafafa",
    },

    
    media: {
      height: 300,
    },
  
    row: 
    {
      width: "100%"
    }
  
  });
  const mystyle3 = {

    backgroundColor: "#C2C2C2",

  };
  const classes = useStyles();
  return (
    <>
    <Card className={classes.card} style={mystyle3}>
      <br></br>
      <br></br>
      <div className="mentors-photo-heading">Search Resume related queries here!</div>
      
      <Search filterQuestions={filterQuestions} />
      <br></br>
      {lists
        .filter((t) => t.question.toLowerCase().includes(search.toLowerCase()))
        .map((g) => (
          
          <Questions
          question={g.question}
          cmt={g.cmt}
            key={g.id.toString()}
            id={g.id}
            removeQ={handleRemoveQ}
          />
          
        ))}
        <br></br>
        <br></br>
        
        <Card className={classes.card} style={mystyle3}> </Card>
        
      <AddQuestion addQuestion={handleAddQ} />
     
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </Card>
    </>
  );
};

export default ResumeFaq;