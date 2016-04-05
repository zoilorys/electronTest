import { createStore } from 'redux';
import _ from 'lodash';

import { ADD_DOG, REMOVE_DOG } from './constants/dogs';
import { addDog, removeDog } from './reducers/dogs';

export const initialState = {
  name: 'Joe',
  age: 23,
  dogs: [{name: 'lucy', age: 34}]
};

function dogOwner(state = initialState, { type, payload }) {
  switch(type) {
    case ADD_DOG:
      return addDog(state, payload);
    case REMOVE_DOG:
      return removeDog(state, payload);
    default:
      return state;
  }
}

const store = createStore(dogOwner);

export default store;
