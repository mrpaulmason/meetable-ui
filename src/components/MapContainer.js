import React from 'react';
import Map from './Map';
import Navbar from './Navbar';

class MapContainer extends React.Component {

  render() {
    return (
      <div className='map-container'>
        <Navbar/>
        <Map/>
      </div>
    )
  }
}

export default MapContainer
