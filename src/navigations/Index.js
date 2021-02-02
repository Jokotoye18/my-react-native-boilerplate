/* eslint-disable prettier/prettier */
// third party import
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {NavigationContainer} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// local import
import AuthStackNavigator from "./AuthStackNavigator";
import RootStackNavigator from "./RootStackNavigator";
import SplashScreen from "../screens/splash-screen/Index";
import {getUser} from "../redux/actions/auth";

const Index = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch(getUser(userToken));
    };

    bootstrapAsync();
  }, [dispatch]);

  if (auth.isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {!auth.token ? <AuthStackNavigator /> : <RootStackNavigator />}
    </NavigationContainer>
  );
};

export default Index;
