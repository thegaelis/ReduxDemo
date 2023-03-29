// Pass in type of action
import {ADD, REMOVE} from './actionType';

export const add = () => ({
  type: ADD,
  value: 10,
});

export const remove = () => ({
  type: REMOVE,
  value: 10,
});
// Declare content of action and value of each action