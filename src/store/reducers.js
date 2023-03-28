import {ADD, REMOVE} from './actionType';

const initState = {
  counter: 0,
};

export const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      console.log('Reducer ADD');
      return {...state, counter: state.counter + action.value};
    case REMOVE:
      console.log('Reducer REMOVE');
      return {...state, counter: state.counter - action.value};
    default:
      return state;
  }
};
