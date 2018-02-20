import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postRefAndPhoneNumber, setRef, setPhoneNumber } from '../actions/index';
import Typed from 'react-typed';
import '../copyright-symbol.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';
import logo from '../meetable-logo.png';

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
      <div className="landing-page">
        <img src={logo} alt='logo' style={{width: '100px', marginLeft: '-10px', marginTop: '30px'}}/>
        <h1>
          Meet<span>a</span>ble
        </h1>
        <div>
          <p>AI</p>
          <Typed
            className="typed-text"
            strings={['for meeting IRL', 'for meeting up with friends', 'for planning first dates', 'for making work coffees happen']}
            typeSpeed={70}
            loop
          />
        </div>
        <form>
          <input type="text" placeholder='Enter your mobile number' onChange={this.handleChange} />
          <MuiThemeProvider>
              <Checkbox />
          </MuiThemeProvider>
          <label style={{fontFamily: 'Montserrat', fontWeight: '400', marginLeft: '40px'}}>
            I accept the{' '}
            <a href="/privacy" id="terms-link" target="_blank">
              terms of service
            </a>
          </label>
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

export default connect(mapStatetoProps, mapDispatchToProps)(LandingPage);
