import React, {Component} from 'react';
const K_SIZE = 35;
const greatPlaceStyle = {
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

  handleClick = (props) => {
    console.log(props);
  }

  render() {
    const style = greatPlaceStyle;

    if (!this.state.clicked) {
      return (
         <div style={style} onClick={() => this.handleClick(this.props)}>
            {this.props.name}
         </div>
      );
    }


  }
}
