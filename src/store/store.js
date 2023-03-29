import {configureStore} from '@reduxjs/toolkit';
import {mainReducer} from './reducers';

//createStore in 'redux' is outdated.

//Using configureStore in redux toolkit instead.
export const store = configureStore({reducer: mainReducer});
