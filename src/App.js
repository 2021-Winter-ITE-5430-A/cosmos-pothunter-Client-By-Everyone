import logo from "./logo.svg";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState, useCallback, useEffect } from "react";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import Navigation from "./components/Navigation";
import TemplatesPhoto from "./components/TemplatePhoto";
import Footer from "./components/Footer";
import MentorsPhoto from './components/MentorsPhoto';
import MentorsBio from './components/MentorsBio';
import MentorsQuestion from './components/MentorsQuestion'
import Header from './components/Header';
import EmploymentService from './components/EmploymentService';
import UserSuccessStory from './components/UserSuccessStory';
import Display from './components/Display';


import MentorsRating from './components/MentorsRating';
//Added by Shelcy
import ResumeFaq from './components/ResumeFaq';
import ReviewCard from './components/ReviewCard';
import UserLogin from './components/UserLogin';
import JsonApiWords from './components/JsonApiWords';
import JsonApiJobs from './components/JsonApiJobs';
import JsonApiForm from './components/JsonApiForm';
import Jobs from './components/Jobs';
import FormResume from './components/auth/FormResume';
import FormNew from './components/auth/FormNew';
//Added by Loveleen
import Faqs from './components/Faqs';
import InterviewToolkit from './components/InterviewToolkit';
import DownloadTemplate from './components/DownloadTemplate';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let approutes;
  console.log(isLoggedIn);
  if (isLoggedIn) {
    approutes = (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<TemplatesPhoto />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
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

      </Routes>
    );
  } else {
    approutes = (
      <Routes>
       {/* Added Menu for ismaila */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/templates" element={<TemplatesPhoto />} />
        <Route path='/Display' element={<Display />} />


        {/* Added Menu for mary */}
        <Route path='/MentorsPhoto' element={<MentorsPhoto/>} />
        <Route path='/MentorsQuestion' element={<MentorsQuestion/>} /> 
        <Route path='/MentorsBio' element={<MentorsBio/>} />

        {/* Added Menu for Soumitra */}
        <Route path='/employmentService' element={<EmploymentService/>} />  
        <Route path='/successStory' element={<UserSuccessStory/>} /> 
        <Route path='/mentorsRating' element={<MentorsRating/>} /> 

        {/* Added Menu for Loveleen */}
        <Route path='/Faqs' element={<Faqs/>} />
        <Route path='/InterviewToolkit' element={<InterviewToolkit/>} />
        <Route path='/DownloadTemplate' element={<DownloadTemplate/>} />

        {/* Added By Shelcy */}
        <Route path='/ResumeFaq' element={<ResumeFaq/>} />
        <Route path='/ReviewCard' element={<ReviewCard/>} />
        <Route path='/Jobs' element={<Jobs/>} />
        <Route path='/api' element={<JsonApiWords/>} />
        <Route path='/jobapi' element={<JsonApiJobs/>} />
        <Route path='/apiform' element={<JsonApiForm/>} />
        <Route path='/userlogin' element={<UserLogin/>} />
        <Route path='/form' element={<FormResume/>} />
        <Route path='/formNew' element={<FormNew/>} />
        {/* </Routes> */}

      </Routes>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        <Navigation />
        <div className="content">{approutes}</div>

        <Footer />
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;

