import _ from 'lodash';

export function addDog(state, payload) {
  return {
    ...state,
    dogs: state.dogs.concat(payload)
  };
}

export function removeDog(state, payload) {
  return {
    ...state,
    dogs: state.dogs.filter((dog, index) => index !== payload)
  };
}
