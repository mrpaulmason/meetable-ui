import React from 'react';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  handleClick = () => {
    this.props.history.push("/")
  }

  render() {
    return (
      <div>
        <div className='nav'>
          <a onClick={this.handleClick}>Meetable</a>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)
