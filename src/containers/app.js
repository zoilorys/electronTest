import React, { Component } from 'react';
import { Provider } from 'react-redux';

import MainPage from './mainPage';
import store from '../store/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    )
  }
}
