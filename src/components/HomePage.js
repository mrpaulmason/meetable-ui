import React from 'react';
import NotificationForm from './NotificationForm'
import logo from '../images/ic_meetable_wordmark_white.svg';
import meetable_m_logo from '../images/ic_meetable_icon.svg';

class HomePage extends React.Component {

  state = {
    renderForm: false
  }

  handleClick = () => {
    this.state.renderForm === false ? this.setState({renderForm:true}) : this.setState({renderForm:false})
  }

  render() {
    if (this.state.renderForm === false) {
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
                  <p>Make plans without all the texting</p>
              </div>
          </section>

          <section id="inputs">
              <div className="get-started">
                  <button className="btn get-started-btn purple-btn">
                      Get Started
                  </button>
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
                  We launch soon. Stay in touch.
              </p>

              <p className="smallerText terms-of-service hidden">
                  By tapping "go", you agree to our <br /><a href="/terms" id="terms-link" target="_blank" >terms of service</a> and <a href="/privacy-policy" id="privacy-link" target="_blank">privacy policy.</a>
              </p>
          </section>

          <section id="welcome-area" className="hidden">
              <p>
                  You're in!  🚀 <br />
                  You'll hear from us soon!  👋 <br />
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
                      2020 Meetable  |  more@meetable.com
                  </p>
              </div>

              <br className="clear-both" />
          </div>

        </div>
      )
    } else {
      return (
        <div>
          <NotificationForm handleClick={this.handleClick}/>
        </div>
      )
    }

  }
}

export default HomePage
