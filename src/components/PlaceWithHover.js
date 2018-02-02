import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {greatPlaceStyle, greatPlaceStyleHover} from './HoverStyles.js';

export default class MyGreatPlaceWithHover extends Component {
  static propTypes = {
    // GoogleMap pass $hover props to hovered components
    // to detect hover it uses internal mechanism, explained in x_distance_hover example
    $hover: PropTypes.bool,
    text: PropTypes.string
  };

  static defaultProps = {};

  handleClick = (text) => {
    console.log(text);
  }

  render() {
    const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle;

    return (
       <div style={style} onClick={() => this.handleClick(this.props.text)}>
          {this.props.text}
       </div>
    );
  }
}
