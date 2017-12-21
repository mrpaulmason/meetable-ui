import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Invite from './components/Invite'
import TermsAndConditions from './components/TermsAndConditions'
import { Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/privacy' component={TermsAndConditions}/>
          <Route exact path='*' component={Invite}/>
        </Switch>
    )
  }
}

export default App;
