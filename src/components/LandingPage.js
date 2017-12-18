import React from 'react';
import NotificationForm from './NotificationForm'

class LandingPage extends React.Component {

  render() {
    return (
      <div className='landing-page'>
        <h2>Meetable.AI</h2>
        <h1>Make plans faster. Meet up easier.</h1>
        <h2>AI guided meetups without all the texting</h2>
        <div>
          <NotificationForm/>
        </div>
      </div>
    )
  }
}

export default LandingPage
