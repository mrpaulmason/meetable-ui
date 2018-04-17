import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postRefAndPhoneNumber, setRef, setPhoneNumber } from '../actions/index';
import Typed from 'react-typed';
import '../copyright-symbol.png';
import logo from '../images/ic_meetable_wordmark_white.svg';
import meetable_m_logo from '../images/ic_meetable_icon.svg';
import wordmark from '../typetreatment_meetable_landingpage.png';

class LandingPage extends React.Component {
  state = {
    phoneNumber: 'Enter your mobile number',
    ref: this.props.location.pathname.slice(1),
    termsAccepted: true
  };

  componentWillMount() {
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
      
        <input className="hidden" type="hidden" id="ref" name="ref" value="" />
        <header>
            <div className="left">
                <div className="logo-icon">
                    <a href="http://www.meetable.ai/"><img src={meetable_m_logo} alt="copyright logo" /></a>
                </div>
            </div>

            <div className="right">
                <div className="invited-by">
                    <p className="no-margin-bottom">Private Beta</p>
                </div>
            </div>

            <br className="clear-both" />
        </header>

        <section id="slogan-area">
            <div className="logo-text">
                <img width="160" src={logo} alt="Meetable Logo" title="Meetable" />
            </div>
           
            <div className="slogan-text alpha-text">
                <p>Text without sharing digits. No app. Free.</p>
            </div>
        </section>

        <section id="inputs">
            <div className="get-started">
                <a href="javascript: void(0);" className="sms-link">
                  <button className="btn purple-btn tap-to-compose-btn">
                    Tap To Text Paul
                  </button>
                </a>
            </div>

            <div className="phone-input hidden">
                <div>
                    <input id="phoneNumberText" type="tel" name="phoneNumber" placeholder="YOUR MOBILE NUMBER" autoComplete="off" autoCorrect="off" maxLength="14"  />
                </div>
                <div>
                    <button className="submit-btn" disabled>Go</button>
                </div>
            </div>
        </section>

        <section id="terms-text" className="hidden">
            <p className="smallerText private-number">
                We don't share numbers or ask names. Users text via private SMS.
            </p>

            <p className="smallerText terms-of-service hidden">
                By tapping "go", you agree to our <br /><a href="/terms" id="terms-link" target="_blank" >terms of service</a> and <a href="/privacy-policy" id="privacy-link" target="_blank">privacy policy.</a>
            </p>
        </section>

        <section id="welcome-area" className="hidden">
            <p>
                You’re in!  🚀 <br />
                Texts incoming  👆 <br />
                Save that contact card  ✅ <br />
                Text your mystery friend  👌 <br />
            </p>
        </section>

        <div className="copyright">

            <div className="bottom-btns hidden">
                <button className="btn update-number-btn">
                    OOPS UPDATE NUMBER
                </button>
            </div>

            <div className="left">
                <p>
                    2018 Meetable  |  more@meetable.com
                </p>
            </div>

            <br className="clear-both" />
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
