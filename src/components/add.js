import React from 'react';
import { connect } from 'react-redux';

import { addDog } from '../store/actions/dogs';

export default connect()(
  ({ dispatch }) =>
   <button  onClick={ () => dispatch(addDog({ name:'fido', age:43 })) } >ADD</button>
)
