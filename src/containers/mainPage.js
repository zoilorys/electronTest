const fs = require('fs');
import path from 'path';

import React, { Component } from 'react';

import store from '../store/store';

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
    fs.writeFile(
      path.join(__dirname, '..', '..', 'result.json'), //filename
      JSON.stringify(store), //content
      console.log.bind(console)
    );
  }
}