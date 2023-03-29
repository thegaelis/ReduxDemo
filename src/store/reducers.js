//Import type of action
import {ADD, REMOVE} from './actionType';

//Declare state
const initState = {
  counter: 0,
};

//Reducer
export const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      console.log('Reducer ADD'); //log the status
      return {...state, counter: state.counter + action.value};
    case REMOVE:
      console.log('Reducer REMOVE'); //log the status
      return {...state, counter: state.counter - action.value};
    default:
      return state;
  }
};
