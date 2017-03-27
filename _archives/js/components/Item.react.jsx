import React, { Component, PropTypes } from 'react';

export default class Item extends Component {
  constructor(props, context) {
    super(props, context);
  }

  /**
   * @return {object}
   */
  render() {
    const { id, text } = this.props;
    return (
      <li>{id}は{text}</li>
    );
  }
}
Item.PropTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
