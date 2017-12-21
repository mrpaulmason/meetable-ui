import React from 'react';
import { bindActionCreators } from 'redux';
import { signup } from '../actions/index'
import { connect } from 'react-redux'
import cancel from '../letter-x.png'

class NotificationForm extends React.Component {

  state = {
    email: '',
    survey: 'Less than 25%'
  }

  validateEmail = (email) => {
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  handleSurveyChange = (e) => {
    this.setState({
      survey: e.target.value
    })
  }

  handleInputChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.validateEmail(this.state.email)) {
      this.setState({
        email: ''
      })
      alert('Please enter a valid email address')
    } else {
      this.props.signup(this.state.email, this.state.survey)
      this.setState({
        email: ''
      })
    }
  }

  render () {
    return (
      <div className='waitlist-form'>
        <form onSubmit={this.handleSubmit}>
          <img id="x-icon" src={cancel} alt="close" onClick={this.props.handleClick}/>
          <h2>Private Beta Waitlist</h2>
          <h1>Email Address *</h1>
          <input type='text' value={this.state.email} onChange={this.handleInputChange}></input>
          <h1>Select</h1>
          <p>How much of your texting is about meeting up?</p>
          <select onChange={this.handleSurveyChange}>
            <option value='Less than 25%'>Less than 25%</option>
            <option value='25-50%'>25-50%</option>
            <option value='50-75%'>50-75%</option>
            <option value='More than 75%'>More than 75%</option>
          </select>
          <br/>
          <input type='submit' value='SUBMIT'></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    signup: state.signup
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signup
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationForm)
