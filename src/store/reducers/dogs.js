import _ from 'lodash';

export function addDog(state, payload) {
  let newState = _.assign({}, state);
  newState.dogs.push(payload);
  return newState;
}

export function removeDog(state, payload) {
  let newState = _.assign({}, state);
  newState.dogs = newState.dogs.filter(dog => dog.name !== payload.name);
  return newState;
}