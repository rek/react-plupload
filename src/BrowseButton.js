import {omit} from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

class BrowseButton extends React.Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return React.createElement('button', omit(this.props, 'content'), this.props.content);
  }
}

BrowseButton.propTypes = {
  'content': PropTypes.string
};

export default BrowseButton;
