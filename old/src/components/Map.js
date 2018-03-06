import React from 'react';
import GoogleMap from 'google-map-react';
import GooglePlace from './GooglePlace';

// import {K_SIZE} from './HoverStyles';

export default class Map extends React.Component {

  // _onClick = ({ x, y, lat, lng, event }) => console.log(x, y, lat, lng, event);

  render() {
    let children = this.props.children.map((place, index) => {
      return (
        <GooglePlace
          key={index}
          address={place.address}
          attributes={place.attributes}
          categories={place.categories}
          googleId = {place.google_id}
          lat={place.latitude}
          lng={place.longitude}
          name={place.name}
        />
      )
    });
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
        {children}
      </GoogleMap>
    )
  }
}
