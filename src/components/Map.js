import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoianR5bmVyYnJ5YW4iLCJhIjoiY2piaTQ1cWdhMXR1MDM0cXd0OHNnbWV6eiJ9.dRUmFyjWhDnI_EnqUxNMfw'

class Map extends React.Component {

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-73.9923, 40.7350],
      zoom: 12.00
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <div className='map' ref={el => this.mapContainer = el} />;
  }
}

export default Map
