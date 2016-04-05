export function addDog(dog) {
  return {
    type: 'ADD_DOG',
    payload: dog
  };
}

export function removeDog(index) {
  return {
    type: 'REMOVE_DOG',
    payload: index
  };
}
