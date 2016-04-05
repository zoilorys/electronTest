import React, { Component } from 'react';

import store from '../store/store';

export default class DogList extends Component {
  constructor(props) {
    super();
    this.state = {
      items: props.items
    };

    this._handleClick = props.handleClick;

    store.subscribe(() => this.forceUpdate());
  }

  getItems() {
    return store.getState().dogs.map((item, index) => <li key={index} onClick={ () => this._handleClick(index) }>{item.name} {item.age}</li>);
  }

  render() {
    let items = this.getItems();

    return (
      <ul>
        { items }
      </ul>
    );
  }
}
