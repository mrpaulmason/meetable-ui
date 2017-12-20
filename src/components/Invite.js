import React from 'react';
import Navbar from './Navbar'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postRefAndPhoneNumber, setRef, setPhoneNumber } from '../actions/index'

class Invite extends React.Component {

  state = {
    phoneNumber: '',
    ref: this.props.location.pathname.slice(1)
  }

  handleChange = (e) => {
    // remove all non-numbers from input value
    let phoneNumber = e.target.value.replace(/\D/g,'');

    this.setState({
      phoneNumber: phoneNumber
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.phoneNumber.length < 10) {
      alert('Please enter a valid phone number')
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
