import React, { Component } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Invite from './components/Invite'
import Test from './components/Test'
import { Route, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    console.log(this.props);
    return (
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/test' component={Test}/>
          <Route exact path='*' component={Invite}/>
        </Switch>
    )
  }
}

export default App;
