import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postRefAndPhoneNumber, setRef, setPhoneNumber } from '../actions/index';
import Typed from 'react-typed';
import '../copyright-symbol.png';
import Checkbox from 'material-ui/Checkbox';
import logo from '../ic_meetable_wordmark.svg';
import meetable_m_logo from '../ic_meetable_icon.svg';
import wordmark from '../typetreatment_meetable_landingpage.png';
import arrow_icon from '../ic_arrow_forward_white.svg';

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

        <h1>
         <img src={logo} alt='Meetable Logo' />
        </h1>

        <div id="conversation">
                
        </div>

        <form class="hidden">
          <input type="tel" maxlength="14" name="phoneNumber" placeholder="Enter your cellphone number" id="phoneNumberText" />
          <button className="submit-btn" disabled><img src={arrow_icon} alt="Arrow Icon" /></button>
          <br />
          <p className="smallerText">By submitting your mobile number, you agree to our <a href="/termsofservice" id="terms-link" target="_blank">terms of service</a> and <a href="/privacypolicy" id="privacy-link" target="_blank">privacy policy.</a></p>
        </form>

        <div className="btn-row hidden">
          <a href="javascript: void(0);" className="btn">Got it!</a>
          <a href="javascript: void(0);" className="btn">Resend</a>
          <a href="javascript: void(0);" className="btn hidden">Change #</a>
        </div>

        <div className="copyright">
          <div className="left">
            <img src={meetable_m_logo} alt="M logo" />
          </div>

          <div className="right">
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
