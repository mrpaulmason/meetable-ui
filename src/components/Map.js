import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoianR5bmVyYnJ5YW4iLCJhIjoiY2piaTQ1cWdhMXR1MDM0cXd0OHNnbWV6eiJ9.dRUmFyjWhDnI_EnqUxNMfw';

class Map extends React.Component {
  // componentDidMount() {
  //   this.map = new mapboxgl.Map({
  //     container: this.mapContainer,
  //     style: 'mapbox://styles/mapbox/streets-v9',
  //     center: [-73.9923, 40.735],
  //     zoom: 12.0
  //   });
  // }
  //
  // componentWillUnmount() {
  //   this.map.remove();
  // }

  render() {
    return (
      <div>
        <iframe title="google map" src="https://www.google.com/maps/d/embed?mid=1LFdD2Ort1ausi0gK7tSUPTFQOOHdd-DP" width="800" height="650" />
      </div>
    );
  }
}

export default Map;
