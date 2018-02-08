import React from 'react';
const K_SIZE = 80;
const style = {
  position: 'absolute',
  width: 200,
  height: K_SIZE,
  left: -K_SIZE / 2,
  top: -K_SIZE / 2,
  border: 'none',
  borderRadius: 4,
  backgroundColor: 'white',
  color: 'black',
  fontWeight: 300,
  fontSize: 9,
  fontFamily: 'Arial',
  padding: 4,
  cursor: 'default'
}

class ClickedGooglePlace extends React.Component {

  state = {
    placeDetails: []
  }

  componentDidMount() {
    // fetch(`${this.state.url}?placeid=${this.props.id}&key=AIzaSyAJXZd8504OfrLpzMQAZRoz89Ix1b3p2dg`, {
    //   method: "GET",
    //   headers:{
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Credentials':true,
    //     'Access-Control-Allow-Methods':'POST, GET'
    //   }
    // }).then(res => res.json()).then(res => console.log(res))
  }

  render() {
    const url = `https://www.google.com/maps/place/?q=place_id:${this.props.id}`
    return (
      <div style={style} onClick={this.props.handleClick}>
        <h3>{this.props.name}</h3>
        <h3>{this.props.address}</h3>
        <a href={url} style={{color: '#427fed', textDecoration: 'none', fontSize: '1.5em', cursor: 'pointer'}}>View on Google Maps</a>
      </div>
    )
  }
}

export default ClickedGooglePlace
