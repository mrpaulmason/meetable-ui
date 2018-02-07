import React from 'react';
import NotificationForm from './NotificationForm'

class HomePage extends React.Component {

  state = {
    renderForm: false
  }

  handleClick = () => {
    this.state.renderForm === false ? this.setState({renderForm:true}) : this.setState({renderForm:false})
  }

  render() {
    if (this.state.renderForm === false) {
      return (
        <div className='landing-page App'>
          <h2>MEETABLE.AI</h2>
          <h1>Make plans faster. Meet up easier.</h1>
          <h2>AI guided meetups without all the texting</h2>
          <span>
            <a onClick={this.handleClick}>Coming Soon - Get Notified</a>
          </span>
        </div>
      )
    } else {
      return (
        <div>
          <NotificationForm handleClick={this.handleClick}/>
        </div>
      )
    }

  }
}

export default HomePage
