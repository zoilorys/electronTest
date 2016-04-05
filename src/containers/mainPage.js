const remote = require('remote');
const fs = remote.require('fs');
import path from 'path';

import React, { Component } from 'react';

import { initialState } from '../store/store';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <button onClick={ () => this._saveState() }>SAVE</button>
      </div>
    );
  }

  _saveState() {
    let filepath = '/home/zoilorys/result.json';
    fs.writeFile(
      filepath,
      JSON.stringify(initialState), //content
      console.log.bind(console)
    );
  }
}
