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
      <div class="landing-page">
        <div class="logo">
          <img width="220" src="./images/ic_meetable_wordmark.svg" alt="Meetable Logo" title="Meetable" />
        </div>

        <div id="conversation">

          <div class="typed-message message-0" style="display:none;">
          <p>Hello!</p>
        </div>

        <div class="typed-message message-1" style="display:none;">
          <p>Welcome. I am AI that makes it WAY easier to meet up with people</p>
        </div>

        <div class="typed-message message-2" style="display:none;">
          <p>To get started please confirm your cellphone number below</p>
        </div>

        <div class="typed-message my-number-message user-typed-message" style="display:none">
          <p>my number is <span class="user-phone-number"></span></p>
        </div>

        <br style="clear:right;" />

          <div class="typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
        </div>

        <form style="display:none;">
          <input type="tel" maxlength="14" name="phoneNumber" placeholder="Enter your cellphone number" id="phoneNumberText" />
          <button class="submit-btn" disabled>Submit</button>
          <br />
          <p class="smallerText" style="display:none;">By submitting your mobile number, you agree to our <a href="/termsofservice" id="terms-link" target="_blank">terms of service</a> and <a href="/privacypolicy" id="privacy-link" target="_blank">privacy policy.</a></p>
        </form>

        <div class="btn-row" style="display:none;">
          <a href="javascript: void(0);" class="btn">Got it!</a>
          <a href="javascript: void(0);" class="btn">Resend</a>
          <a href="javascript: void(0);" class="btn">Change #</a>
        </div>

        <div class="copyright">
          <div class="left">
            <img src="./images/ic_meetable_icon_hollow.svg" alt="copyright logo" />
          </div>

          <div class="right">
            <p>
              2018 Meetable  |  more@meetable.com
            </p>
          </div>

          <br class="clear-both" />
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
