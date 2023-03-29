import React from 'react';
import Counter from './src/Counter';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
const App = () => {
  return (
    //The <Provider> component makes the Redux store available to any nested components that need to access the Redux store.
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
