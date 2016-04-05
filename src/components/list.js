import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeDog } from '../store/actions/dogs';

export default connect(state => state)(
  function({ dispatch, dogs }) {
    var list = dogs.map(
      (item, index) =>
      <li key={index} onClick={ () => dispatch(removeDog(index)) }>{item.name} {item.age}</li>
    );

    return (
      <ul>
        { list }
      </ul>
    );
  }
)
