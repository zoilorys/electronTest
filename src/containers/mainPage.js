import path from 'path';

import username from 'username';
import remote from 'remote';
const fs = remote.require('fs');

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addDog } from '../store/actions/dogs';

import List from '../components/list';
import AddButton from '../components/add';

export default connect(state => {
  return { state: state };
})(
  class MainPage extends Component {
    render() {
      return (
        <div>
          <h1>Hello</h1>
          <button onClick={ () => this._saveState() }>SAVE</button>
          <AddButton />
          <List />
        </div>
      );
    }

    _saveState() {
      var { state } = this.props;

      username().then(uname => {
        let filepath = '/home/' + uname + '/result.json';
        fs.writeFile(
          filepath,
          JSON.stringify(state)
        );
      });
    }
  }
)
