import React from 'react';
import Navbar from './Navbar'

class Invite extends React.Component {

  render() {
    return (
      <div className='invite'>
        <Navbar/>
        <form>
          <h3>Phone Number</h3>
          <input type='text'></input>
          <input type='submit'></input>
        </form>
        <div className='footer'>
        </div>
      </div>
    )
  }
}

export default Invite
