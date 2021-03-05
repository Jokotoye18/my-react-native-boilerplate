import React, {useState} from "react";
import {View, Text, Button, Switch} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {useTheme} from "@react-navigation/native";
import {AppState} from '../redux/reducers';

import {logout, switchColorScheme} from "../redux/actions";

const RootStackNavigator = () => {
  const {scheme} = useSelector((state: AppState) => state.colorScheme);
  const dispatch = useDispatch();
  const {colors} = useTheme();

  const handleLogout = () => {
    dispatch(logout());
  };

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    dispatch(switchColorScheme(scheme));
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}>
      <Text>RootStackNavigator</Text>
      <Button title="Logout" onPress={handleLogout} />
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  );
};

export default RootStackNavigator;
