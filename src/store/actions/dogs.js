export function addDog(dog) {
  return {
    type: 'ADD_DOG',
    payload: dog
  };
}

export function removeDog(dog) {
  return {
    type: 'REMOVE_DOG',
    payload: dog
  };
}