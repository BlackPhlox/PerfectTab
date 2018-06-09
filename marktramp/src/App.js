import React, { Component } from 'react';
import './App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import MainContent from './components/maincontent/MainContent.js';


class App extends Component {
  render() {
    return (
      <div className="hg">
        <Header/>
        <MainContent/>
        <Footer/>
       </div>
    );
  }
}

export default App;
