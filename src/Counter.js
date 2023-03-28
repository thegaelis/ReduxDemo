import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {add, remove} from './store/action';

const Counter = props => {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Redux Increment and Decrement Demo</Text>
      <Button
        title="Add $10"
        onPress={() => {
          console.log('Dispatch Add');
          dispatch(add());
        }}
      />
      <Text>${data}</Text>
      <Button
        title="Remove $10"
        onPress={() => {
          console.log('Dispatch Remove');
          dispatch(remove());
        }}
      />
    </View>
  );
};

export default Counter;
