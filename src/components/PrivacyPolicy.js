import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postRefAndPhoneNumber, setRef, setPhoneNumber } from '../actions/index';
import Typed from 'react-typed';
import '../copyright-symbol.png';
import Checkbox from 'material-ui/Checkbox';
import logo from '../images/ic_meetable_wordmark_white.svg';
import meetable_m_logo from '../images/ic_meetable_icon.svg';
import wordmark from '../typetreatment_meetable_landingpage.png';

const PrivacyPolicy = () => {
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
            <h2>Meetable Inc. Privacy Policy</h2>
        </div>
    </section>

    <section id="welcome-area" className="terms-area">
        
        <p>
            <h3>1. Sharing data</h3> 
            We never share your data with anyone. We don’t require you to tell us your name. To date, we have disclosed 0 bytes of user data to third parties, including governments.
        </p>

        <br />

        <p>
            <h3>2. Storing data</h3> 
            Meetable  only stores the data it needs to function properly and build the features that users want — for as long as you want to use Meetable.
        </p>



        <p>
            <strong>Relay Chart</strong> <br />
            Meetable is an anonymous SMS relay service. We anonymously store messages, photos, videos and documents from your Relay chats on our servers, so that you can access your data from any of your devices anytime and use search to quickly access all your messages. All data is stored heavily secured to prevent local engineers or physical intruders from accessing user data.
        </p>

        <p>
            <strong>Contacts</strong> <br />
            Meetable uses phone numbers as unique identifiers, but does not share your phone number with other users without your permission. We ask your permission before syncing your contacts. <br /><br />
            We store your contacts in order to notify you as soon as one of your contacts signs up for Meetable and to properly display names in notifications. We only need the number and nickname for this to work and store no other data about your contacts.
        </p>

        <p>
            <h3>3. Deleting data</h3> 
        </p>

        <p>
            <strong>Accounts</strong> <br />
            If you would like to delete your account, you can can text us DEACTIVATE. Deleting your account permanently removes all your <strong>messages</strong>, <strong>groups</strong> and <strong>contacts</strong>.
        </p>

        <p>
            <strong>Messages</strong> <br />
            Everything you delete is deleted forever. When you delete a message, you delete it from your message history. This means that a copy still stays on the server as part of your partner‘s message history. As soon as your partner deletes it too, it’s gone forever. 
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

export default PrivacyPolicy 
