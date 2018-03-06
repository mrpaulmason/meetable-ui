import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postRefAndPhoneNumber, setRef, setPhoneNumber } from '../actions/index';
import Typed from 'react-typed';
import '../copyright-symbol.png';
import Checkbox from 'material-ui/Checkbox';
import logo from '../meetable-logo.png';
import wordmark from '../typetreatment_meetable_landingpage.png';

class LandingPage extends React.Component {
  state = {
    phoneNumber: 'Enter your mobile number',
    ref: this.props.location.pathname.slice(1),
    termsAccepted: true
  };

  componentWillMount() {
    Checkbox.defaultProps.disableTouchRipple = true
  }

  validatePhoneNumber = input => {
    let phoneNumber = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    return input.match(phoneNumber) ? true : false;
  };

  convertToNumber = str => {
    var re = /\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})/g; 
    var subst = '$1 $2-$3'; 
    var result = str.replace(re, subst);

    return result;
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

  handleKeyPress = (e) => {
    if ((e.key >=-1 && e.key < 10)) {
      return true;
    } else {
      e.preventDefault();
    }
  };

  render() {
    if (this.props.user.postResults !== '' && this.props.user.postResults !== 'invalid code') {
      alert(this.props.user.postResults);
    }
    return (
      <div className="landing-page">
        <img src={logo} alt='logo' style={{width: '100px', marginLeft: '-10px', marginTop: '30px'}}/>
        <h1>
         <img src={wordmark} alt='Meetable' style={{width: '275px'}}/>
        </h1>
        <div>
          <p className="taglineStatic">AI</p>
          <p className="taglineDynamic">
           <Typed
             strings={['for meeting IRL', 'for planning first dates', 'for meeting up with friends', 'for work coffees']}
             typeSpeed={40}
             loop
           />
          </p>
        </div>
        <form>
          <input type="tel" pattern="[0-9]*" autocomplete="on" placeholder='Enter your mobile number' onKeyPress={this.handleKeyPress} onChange={this.handleChange} />
          <button></button> 
          <p className="smallerText">
            By submitting your mobile number, you agree to our{' '}
            <a href="/termsofservice" id="terms-link" target="_blank"> 
            terms of service
            </a> 
            {' '}and{' '} 
             <a href="/privacypolicy" id="privacy-link" target="_blank">
            privacy policy.
            </a>
          </p>
        </form>
        <div className="copyright">
          <p className="smallerText">
            <img src={require('../copyright-symbol.png')} alt="copyright logo" /> 2018 Meetable  |  more@meetable.com
          </p>
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

export default connect(mapStatetoProps, mapDispatchToProps)(LandingPage);
