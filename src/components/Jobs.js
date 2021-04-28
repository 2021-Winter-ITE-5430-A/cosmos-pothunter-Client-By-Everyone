import React, { useState } from 'react';
import JobHeader from './JobHeader';
import JobsAvailable from './JobsAvailable';
import JobSearch from './JobSearch';
import JobWhere from './JobWhere';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import './SamPic.css';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));
const Jobs = () => {
  const [lists, setLists] = useState([
    {
      name: 'Junior Python Developer',
      company: 'Exiger Tech',
      location: 'Toronto,ON',
      applyhere: 'https://jobs.lever.co/exiger/32187294-4886-4e30-9c46-163cefca6bb5',
      date:'27-03-2021',
      id: 1,
    },
    {
      name: 'Junior Software Developer',
      company: 'Fiix',
      location: 'Toronto,ON',
      applyhere: 'https://jobs.lever.co/fiixsoftware/453b621d-13ba-4fb2-b2fa-c4300e2df8d0',
      date:'25-03-2021',
      id: 3,
    },

    {
      name: 'Jr. Software Engineer Intern (JR1024602)',
      company: 'Broadridge',
      location: 'Toronto,ON',
      applyhere: 'https://jobs.smartrecruiters.com/Broadridge/743999738460810-jr-software-engineer-intern-jr1024602-?sid=47',
      date:'25-03-2021',
      id: 4,
    },
    {
      name: 'Software Engineer (Web & Full-Stack Developer)',
      company: 'SecureKey',
      location: 'Toronto,ON',
      applyhere: 'https://securekey.com/software-engineer-web-full-stack-developer/',
      date:'25-03-2021',
      id: 5,
    },
    {
      name: 'Software Developer',
      company: 'HelpWear Inc.',
      location: 'Toronto,ON',
      applyhere: 'https://www.helpwear.ca/software-developer',
      date:'24-03-2021',
      id: 6,
    },

    {
      name: 'Intern, Software Developer, SOS',
      company: 'Autodesk',
      location: 'Toronto,ON',
      applyhere: 'https://autodesk.wd1.myworkdayjobs.com/en-US/uni/job/Toronto-ON-CAN/Intern--Software-Developer--SOS_21WD47047?source=Indeed',
      date:'24-03-2021',
      id: 7,
    },
    {
      name: 'Junior .NET Developer',
      company: 'CGI Inc',
      location: 'Toronto, Ontario, Canada',
      applyhere: 'https://cgi.njoyn.com/CGI/xweb/XWeb.asp?NTKN=c&clid=21001&Page=JobDetails&Jobid=J1020-1006&BRID=783038&lang=1',
      date:'24-03-2021',
      id: 8,
    },
    {
      name: 'Tech Senior Java Developer',
      company: 'Exiger Tech',
      location: 'Toronto,ON',
      applyhere: 'https://jobs.lever.co/exiger/693ae18b-a970-4e66-8338-5fddac5b1b66',
      date:'24-03-2021',
      id: 9,
    },

    {
      name: 'Junior Software Developer',
      company: 'RPM Technologies',
      location: 'Toronto,ON',
      applyhere: 'https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=29ecb1c7-5c5e-4390-b6be-6cc9806624e9&ccId=19000101_000001&jobId=274070&source=IN&lang=en_CA',
      date:'24-03-2021',
      id: 10,
    },
    {
      name: 'Junior Full Stack Developer',
      company: 'Markdale Financial Management ',
      location: 'Toronto,ON',
      applyhere: 'https://markdalefinancialmanagement.com/careers/junior-full-stack-web-developer/',
      date:'23-03-2021',
      id: 11,
    },
    {
      name: 'Junior / Intermediate Software Developer',
      company: '7D Surgical',
      location: 'Missisauga,ON',
      applyhere: 'https://7dsurgical.com/careers/',
      date:'23-03-2021',
      id: 12,
    },

    {
      name: 'Junior Full Stack Developer',
      company: 'Markdale Financial Management',
      location: 'Ottawa,ON',
      applyhere: 'https://jobs.lever.co/exiger/32187294-4886-4e30-9c46-163cefca6bb5',
      date:'23-03-2021',
      id: 13,
    },
    {
      name: 'Junior Software Developer',
      company: 'Idea Notion Development Inc.',
      location: 'Markham,ON',
      applyhere: 'https://jobs.lever.co/exiger/32187294-4886-4e30-9c46-163cefca6bb5',
      date:'22-03-2021',
      id: 14,
    },
    {
      name: 'Software Developer Intern – 16 months',
      company: 'Profound Medical',
      location: 'Mississauga, ON',
      applyhere: 'https://profoundmedical.com/company/#careers',
      date:'22-03-2021',
      id: 15,
    },
    {
      name: 'Senior Software Developer - Front-end',
      company: 'HATCH',
      location: 'Mississauga, ON, CA',
      applyhere: 'https://jobs.hatch.com/job/Mississauga-Senior-Software-Developer-Front-end-ON/722957100/?feedId=201500&utm_source=Indeed&utm_campaign=Hatch_Indeed&codes=WEB-Indeed',
      date:'22-03-2021',
      id: 16,
    },

    {
      name: 'Senior Software Engineer - Web',
      company: 'ATP',
      location: 'Mississauga, ON',
      applyhere: 'https://jobs.lever.co/casebank/64eeaaf5-fff0-437d-87af-10358a6759ca?lever-source=Indeed',
      date:'22-03-2021',
      id: 17,
    },
  ]);
  const [search, setSearch] = useState('');
  const filterTasks = (name) => {
    if (name) {
      setSearch(name);
    } else {
      setSearch('');
    }
  };
  const filterLocations = (location) => {
    if (location) {
      setSearch(location);
    } else {
      setSearch('');
    }
  };

  const handleRemoveTask = (id) => {
    setLists((prevState) => prevState.filter((t) => t.id !== id));
  };
  const handleNavJob = (id) => {
    setLists((prevState) => prevState.filter((t) => t.id !== id));
  };
  const classes = useStyles();
  // let totalTask = 0;
  // lists.map((t) => (totalTask += t.items.length));
  const mystyle3 = {
    width: "auto",
    height: "auto",
    backgroundColor: "#fddfdf",
    textAlign: 'center',
    justifyContent: 'left',
    alignContent: 'left',
    // padding: '30px'
    paddingTop:'20px',
    paddingBottom:'20px'
  };
  const mystyle2 = {
    width: "70%",
    height: "70%",
    backgroundColor: "#A893AB",
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    // padding: '30px'
    paddingTop:'20px',
    paddingBottom:'20px'
  };
  return (
    <>
      <Card className={classes.card} style={mystyle3} >
        <JobHeader title='Find Jobs' />

      <JobSearch filterTasks={filterTasks} />
      <br></br>
      <JobWhere filterLocations={filterLocations} />
      <br></br>
      <br></br>
     {/* {lists
        .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
        .map((g) => (
          <Card className={classes.card} style={mystyle2} class="center">
          <JobsAvailable
            name={g.name}
            company={g.company}
            location={g.location}
            applyhere={g.applyhere}
            date={g.date}
            key={g.id.toString()}
            id={g.id}
            removeTask={handleRemoveTask}
            navJob={handleNavJob}
          />
          </Card>
        ))}  */}
      {/* Removed card and replaced with div to create container for responsive */}

        {lists
        .filter((t) => t.name.toLowerCase().includes(search.toLowerCase()))
        .map((g) => (
          
        <div className='container' style={{backgroundColor:'#A893AB', paddingTop:20, paddingBottom:20}}>
          <JobsAvailable
            name={g.name}
            company={g.company}
            location={g.location}
            applyhere={g.applyhere}
            date={g.date}
            key={g.id.toString()}
            id={g.id}
            removeTask={handleRemoveTask}
            navJob={handleNavJob}
            />
        </div>
        ))}
      </Card>
    </>
  );
};

export default Jobs;