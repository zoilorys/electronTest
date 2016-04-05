import path from 'path';

import username from 'username';
import remote from 'remote';
const fs = remote.require('fs');

import React, { Component } from 'react';

import * as actions from '../store/actions/dogs';

import DogList from '../components/dogList';
import store, { initialState } from '../store/store';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={ () => this._saveState() }>SAVE</button>
        <button onClick={ () => store.dispatch(actions.addDog({name:'fido', age: 43})) }>ADD</button>
        <DogList items={ store.getState().dogs } handleClick={ index => this._deleteItem(index) } />
      </div>
    );
  }

  _saveState() {
    username().then(uname => {
      let filepath = '/home/' + uname + '/result.json';
      fs.writeFile(
        filepath,
        JSON.stringify(initialState), //content
        console.log.bind(console)
      );
    });
  }

  _deleteItem(index) {
    store.dispatch(actions.removeDog(index));
  }
}
