import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {greatPlaceStyle, greatPlaceStyleHover} from './HoverStyles.js';

export default class MyGreatPlaceWithHover extends Component {

  handleClick = (props) => {
    console.log(props);
  }

  render() {
    const style = greatPlaceStyleHover;

    return (
       <div style={style} onClick={() => this.handleClick(this.props)}>
          {this.props.name}
       </div>
    );
  }
}
