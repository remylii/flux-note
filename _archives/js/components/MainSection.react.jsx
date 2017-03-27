import React, { Component, PropTypes } from 'react';
import Item from './Item.react';

export default class MainSection extends Component {
  constructor(props, context) {
    super(props, context);

    // bind this
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    const { actions } = this.props;
    let text = Date().toLocaleString();

    actions.addItem(text);
  }

  /**
   * @return {object}
   */
  render() {
    const { actions, samples } = this.props;

    let itemList = [];
    if (samples.length > 0) {
      samples.forEach((v, i) => {
        itemList.push(
          <Item
            key={v.id}
            id={v.id}
            text={v.text} />
        );
      });
    }

    return (
      <div>
        <h2>MainSection</h2>
        <ul>
          {itemList}
        </ul>
        <div>
          <button onClick={this.handleOnClick}>Click here</button>
        </div>
      </div>
    );
  }
}
