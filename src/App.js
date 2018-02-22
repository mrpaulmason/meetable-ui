import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import MapContainer from './components/MapContainer';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/termsofservice" component={TermsOfService} />
        <Route exact path="/privacypolicy" component={PrivacyPolicy} />
        <Route exact path="/map/*" component={MapContainer} />
        <Route exact path="/*" component={LandingPage} />
      </Switch>
    );
  }
}

export default App;
