import React from 'react';

class NotificationForm extends React.Component {

  state = {
    email: '',
    selectValue: 'Less than 25%'
  }

  handleSelectChange = (e) => {
    this.setState({
      selectValue: e.target.value
    })
  }

  handleInputChange = (e) => {
    this.setState({
      email: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(`Your email is ${this.state.email} and the percantage of texts that are meeting related is ${this.state.selectValue}.`)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2>Private Beta Waitlist</h2>
          <h1>Email Address *</h1>
          <input type='text' onChange={this.handleInputChange}></input>
          <h1>Select</h1>
          <p>How much of your texting is about meeting up?</p>
          <select onChange={this.handleSelectChange}>
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

export default NotificationForm
