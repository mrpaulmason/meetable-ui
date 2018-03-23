import React, {Component} from 'react';
import ClickedGooglePlace from './ClickedGooglePlace';
const K_SIZE = 35;
const defaultStyle = {
  position: 'absolute',
  width: K_SIZE,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,
  border: 'none',
  borderRadius: 4,
  backgroundColor: 'nones',
  textAlign: 'center',
  color: '#F59D59',
  fontSize: 11,
  fontFamily: 'Arial',
  padding: 4,
  cursor: 'pointer',
  textShadow: '1px 1px #fff'
};

export default class GooglePlace extends Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    if (!this.state.clicked) {
      this.setState({
        clicked: true
      });
    } else {
      this.setState({
        clicked: false
      });
    }
  }

  render() {
    if (!this.state.clicked) {
      return (
         <div style={defaultStyle} onClick={this.handleClick}>
            {this.props.name}
         </div>
      );
    } else {
      return (
        <ClickedGooglePlace
          lat={this.props.lat}
          lng={this.props.lng}
          name={this.props.name}
          address={this.props.address}
          handleClick={this.handleClick}
          id={this.props.googleId}
        />
      )
    }


  }
}
