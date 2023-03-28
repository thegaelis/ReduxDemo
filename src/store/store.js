import {configureStore} from '@reduxjs/toolkit';
import {mainReducer} from './reducers';

export const store = configureStore({reducer: mainReducer});
