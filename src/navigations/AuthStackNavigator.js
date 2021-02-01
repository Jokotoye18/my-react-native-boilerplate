import React from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';

import {login} from '../redux/actions/auth';

const AuthStackNavigator = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>AuthStackNavigator</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default AuthStackNavigator;
