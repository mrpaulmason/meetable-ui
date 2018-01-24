import React from 'react';
import GoogleMap from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends React.Component {
  _onClick = ({ x, y, lat, lng, event }) => console.log(x, y, lat, lng, event);

  render() {
    return (
      <GoogleMap
        className="map"
        onClick={this._onClick}
        style={{}}
        options={{}}
        bootstrapURLKeys={{
          key: 'AIzaSyCkPQJH0W9Z-P5GiO-YGQFDUAHvJlh2CcE'
        }}
        layerTypes={['TransitLayer']}
        defaultCenter={{ lat: 40.7260377, lng: -73.9931798 }}
        defaultZoom={14}>
        <AnyReactComponent lat={40.7421726} lng={-74.0050918} text={'Chelsea Market'} />
        <AnyReactComponent lat={40.7300109} lng={-73.9995557} text={'Third Rail Coffee'} />
      </GoogleMap>
    );
  }
}
