import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postRefAndPhoneNumber, setRef, setPhoneNumber } from '../actions/index';
import '../copyright-symbol.png';

class Invite extends React.Component {
  state = {
    phoneNumber: '',
    ref: this.props.location.pathname.slice(1),
    termsAccepted: false
  };

  validatePhoneNumber = input => {
    let phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return input.match(phoneNumber) ? true : false;
  };

  handleChange = e => {
    this.setState({
      phoneNumber: e.target.value
    });
  };

  handleCheckbox = () => {
    if (this.state.termsAccepted === false) {
      this.setState({
        termsAccepted: true
      });
    } else {
      this.setState({
        termsAccepted: false
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.validatePhoneNumber(this.state.phoneNumber)) {
      alert('Please enter a valid phone number');
    } else if (!this.state.termsAccepted) {
      alert('You must accept the Terms and Conditions');
    } else {
      this.props.setRef(this.state.ref);
      this.props.setPhoneNumber(this.state.phoneNumber);
      this.props.postRefAndPhoneNumber(this.state.ref, this.state.phoneNumber);
      this.setState({
        phoneNumber: ''
      });
    }
  };

  render() {
    if (this.props.user.postResults !== '' && this.props.user.postResults !== 'invalid code') {
      alert(this.props.user.postResults);
    }
    return (
      <div className="invite">
        <h1 id="logo-box">M</h1>
        <h1>
          M<span>ee</span>table
        </h1>
        <p>AI for meeting up with work peeps</p>
        <form>
          <input type="text" placeholder="Default text (e.g., Enter number)" onChange={this.handleChange} />
          <div className="inline-input">
            <input type="checkbox" onClick={this.handleCheckbox} />
            <label>
              I accept the{' '}
              <a href="/privacy" id="terms-link" target="_blank">
                terms of service
              </a>
            </label>
          </div>
        </form>
        <div className="copyright">
          <img src={require('../copyright-symbol.png')} alt="copyright logo" />
          <p>2018 Meetable</p>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      postRefAndPhoneNumber,
      setRef,
      setPhoneNumber
    },
    dispatch
  );
};

export default connect(mapStatetoProps, mapDispatchToProps)(Invite);
