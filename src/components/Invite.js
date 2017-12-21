import React from 'react';
import Navbar from './Navbar'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postRefAndPhoneNumber, setRef, setPhoneNumber } from '../actions/index'

class Invite extends React.Component {

  state = {
    phoneNumber: '',
    ref: this.props.location.pathname.slice(1),
    termsAccepted: false
  }

  validatePhoneNumber = (input) => {
    let phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return input.match(phoneNumber) ? true : false
  }

  handleChange = (e) => {
    this.setState({
      phoneNumber: e.target.value
    })
  }

  handleCheckbox = () => {
    if (this.state.termsAccepted === false) {
      this.setState({
        termsAccepted: true
      })
    } else {
      this.setState({
        termsAccepted: false
      })
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (!this.validatePhoneNumber(this.state.phoneNumber)) {
      alert('Please enter a valid phone number')
    } else if (!this.state.termsAccepted) {
      alert('You must accept the Terms and Conditions')
    } else {
      this.setState({
        phoneNumber: ''
      })
      this.props.setRef(this.state.ref)
      this.props.setPhoneNumber(this.state.phoneNumber)
      this.props.postRefAndPhoneNumber(this.state.ref, this.state.phoneNumber)
    }
  }

  render() {
    if (this.props.user.postResults !== '' && this.props.user.postResults !== 'invalid code') {
      alert(this.props.user.postResults)
    }
    return (
      <div className='invite'>
        <Navbar/>
        <form onSubmit={this.handleSubmit}>
          <h3>Phone Number</h3>
          <input type='text' value={this.state.phoneNumber} onChange={this.handleChange}></input>
          <input type='checkbox' onClick={this.handleCheckbox}></input>
          <h3 id='terms-header'>I have read and agree to the<a href='/privacy' id='terms-link' target="_blank">Terms and Conditions</a></h3>
          <br/>
          <input type='submit' value='Get Started'></input>
        </form>
        <div className='footer'>
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    postRefAndPhoneNumber,
    setRef,
    setPhoneNumber
  }, dispatch)
}

export default connect(mapStatetoProps, mapDispatchToProps)(Invite)
