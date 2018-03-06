import React from 'react';
import Map from './Map';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addPlaces } from '../actions/index';

class MapContainer extends React.Component {
  state = {
    places: []
  };

  componentDidMount() {
    this.props.addPlaces();
  }

  render() {
    return (
      <div>
        <Map children={this.props.map.places}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    map: state.map
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addPlaces
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer)
