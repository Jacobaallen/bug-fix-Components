import React, { Component } from 'react';

import './App.css';
import Navbar from './components/navbar.js';
import Home from './components/home.js';
import Main from './components/main.js';
import Projects from './components/Projects.js';
import Resume from './components/resume.js';
import Contact from './components/contact.js';
import SocialLinks from './components/socialLinks.js';
import Footer from './components/footer.js';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <Main />
        <Projects />
        <Resume />
        <Contact />
        <SocialLinks />
        <Footer />
      </div>
    );
  }
}

export default App;
