import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import TermsAndConditions from './components/TermsAndConditions';
import MapContainer from './components/MapContainer';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/privacy" component={TermsAndConditions} />
        <Route exact path="/map/*" component={MapContainer} />
        <Route exact path="/*" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
