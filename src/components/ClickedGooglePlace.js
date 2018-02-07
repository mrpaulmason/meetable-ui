import React from 'react';
const K_SIZE = 50;
const style = {
  position: 'absolute',
  width: 100,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,
  border: 'none',
  borderRadius: 4,
  backgroundColor: 'white',
  textAlign: 'center',
  color: 'black',
  fontSize: 11,
  fontFamily: 'Arial',
  padding: 4,
  cursor: 'pointer',
}

class ClickedGooglePlace extends React.Component {

  render() {
    const url = `https://google.com/maps/place/${this.props.name.split(' ').join('+')}/@${this.props.lat},${this.props.lng},17z/`
    return (
      <div style={style} onClick={this.props.handleClick}>
        <a href={url} target='_blank' style={{color: 'black', textDecoration: 'none'}}>View On Google Maps</a>
      </div>
    )
  }
}

export default ClickedGooglePlace
