import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Added by ismaila
import Home from './Home'
import Contact from './Contact';
import About from './About';
import TemplatePhoto from './TemplatePhoto';
import Login from './auth/Login';
import Register from './auth/Register';

//Added by mary
import MentorsPhoto from './MentorsPhoto';
import MentorsBio from './MentorsBio';
import MentorsQuestion from './MentorsQuestion'
import Header from './Header';
import Footer from './Footer';

//Added by soumitra
import EmploymentService from './EmploymentService';
import UserSuccessStory from './UserSuccessStory';
import MentorsRating from './MentorsRating';
//Added by Shelcy
import ResumeFaq from './ResumeFaq';
import ReviewCard from './ReviewCard';
import UserLogin from './UserLogin';
import JsonApiWords from './JsonApiWords';
import JsonApiJobs from './JsonApiJobs';
import JsonApiForm from './JsonApiForm';
import Jobs from './Jobs';
import FormResume from './auth/FormResume';
import FormNew from './auth/FormNew';
//Added by Loveleen
import Faqs from './Faqs';
import InterviewToolkit from './InterviewToolkit';
import DownloadTemplate from './DownloadTemplate';



import '../App.css';
import { ContactSupport } from '@material-ui/icons';


const AppRouter = () => {
  //console.log('working from app router')
  return (
    <BrowserRouter>
      <Header />
      <div className="content">
    {/* <Routes>  */}
        <Route path='/' exact component={Home} />
        <Route
          path='/about'
         
        />
        {/* Added Menu for ismaila */}
        <Route path='/contact' component={Contact} />
        <Route path='/About' component={About} />
        <Route path='/Login' component={Login} />
        <Route path='/Register' component={Register} />
        {/* <Route path="/templates" element={TemplatePhoto } /> */}
        <Route path='/MentorsPhoto' component={MentorsPhoto} />
        <Route path='/MentorsQuestion' component={MentorsQuestion} />        
        <Route path='/MentorsBio' component={MentorsBio} />

        {/* Added Menu for Soumitra */}
        <Route path='/employmentService' component={EmploymentService} />  
        <Route path='/successStory' component={UserSuccessStory} /> 
        <Route path='/mentorsRating' component={MentorsRating} /> 

        {/* Added Menu for Loveleen */}
        <Route path='/Faqs' component={Faqs} />
        <Route path='/InterviewToolkit' component={InterviewToolkit} />
        <Route path='/DownloadTemplate' component={DownloadTemplate} />

        {/* Added By Shelcy */}
        <Route path='/ResumeFaq' component={ResumeFaq} />
        <Route path='/ReviewCard' component={ReviewCard} />
        <Route path='/Jobs' component={Jobs} />
        <Route path='/api' component={JsonApiWords} />
        <Route path='/jobapi' component={JsonApiJobs} />
        <Route path='/apiform' component={JsonApiForm} />
        <Route path='/userlogin' component={UserLogin} />
        <Route path='/form' component={FormResume} />
        <Route path='/formNew' component={FormNew} />
        {/* </Routes> */}
      </div>
     <Footer></Footer>
    </BrowserRouter>
  );
};

export default AppRouter;