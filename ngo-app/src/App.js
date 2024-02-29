// import logo from './logo.svg';
import React, {useContext} from 'react';
import './App.css';
import {Routes, Route } from "react-router-dom";
import {ThemeContext} from './utils/ThemeContext';
import Home from './pages/Home';
import DonationPage from './pages/DonationPage';
import DonateNow from './pages/DonateNow';
import EventsPage from "./pages/EventsPage";
import EventDetails from "./pages/EventDetails";
import LogisticsPage from './pages/LogisticsPage';
import LogisticsDetails from './pages/LogisticsDetails';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {Header} from './components/Header';
import {Footer} from './components/Footer'
import './styles/darkTheme.css';
import './styles/index.css';

function App() {

  const { darkMode } = useContext(ThemeContext);


  return (
    <div className={darkMode ? "darkBG" : "lightBG"}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/donate-now/:id" element={<DonateNow />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/event/:id" element={<EventDetails />} />
        <Route path="/logistics" element={<LogisticsPage />} />
        <Route path="/logistics/:id" element={<LogisticsDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
