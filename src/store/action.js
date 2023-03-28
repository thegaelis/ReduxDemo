// Truyen 2 loai hanh dong vao
import {ADD, REMOVE} from './actionType';

export const add = () => ({
  type: ADD,
  value: 10,
});

export const remove = () => ({
  type: REMOVE,
  value: 10,
});
