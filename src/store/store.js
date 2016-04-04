import { createStore } from 'redux';
import _ from 'lodash';

import { ADD_DOG, REMOVE_DOG } from './constants/dogs';
import * as actions from './reducers/dogs';

export const initialState = {
  name: 'Joe',
  age: 23,
  dogs: []
};

function dogOwner(state = initialState, action) {
  switch(action.type) {
    case ADD_DOG:
      return actions.addDog(state, action.payload);
    case REMOVE_DOG:
      return actions.removeDog(state, action.payload);
    default:
      return state;
  }
}

export default createStore(dogOwner);