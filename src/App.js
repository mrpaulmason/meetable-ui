import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={LandingPage}/>
      </Router>
    );
  }
}

export default App;
