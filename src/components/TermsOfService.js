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

const TermsOfService = () => {
  return (
    <div className='landing-page'>
      
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

    <section id="slogan-area" className="padding-zero">
        <div className="logo-text">
            <h2>Meetable Inc. Terms of Service</h2>
        </div>
    </section>

    <section id="welcome-area" className="terms-area">
        
        <p>
            By using Meetable services, you agree to:
        </p>

        <p>
            <ul>
                <li>be at least 13 years of age</li>
                <li>NOT use our service to send spam or scam users</li>
                <li>NOT bully, harass, intimidate, or defame users</li>
                <li>pay any text-messaging and data charges any you may incur using our Services</li>
                <li>update your mobile number within 24 hours of changing it to prevent us from sending to someone else messages intended for you</li>
            </ul>
        </p>

        <p>
            We reserve the right to update these Terms of Service later.
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
  )
}

export default TermsOfService
