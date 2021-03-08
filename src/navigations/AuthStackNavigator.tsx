import React from "react";
import {View, Text, Button} from "react-native";
import {useDispatch} from "react-redux";

import {login} from "../redux/actions";

export const AuthStackNavigator = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = {
      firstName: "Ademola",
      lastName: "Jokotoye",
      email: "jokotoye@gmail.com",
    };
    dispatch(login(user));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text>AuthStackNavigator</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};