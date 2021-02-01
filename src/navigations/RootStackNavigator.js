import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';

import {logout} from '../redux/actions/auth';

const RootStackNavigator = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>RootStackNavigator</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default RootStackNavigator;
