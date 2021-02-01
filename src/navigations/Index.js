import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './AuthStackNavigator';
import RootStackNavigator from './RootStackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from '../screens/splash-screen/Index';
import {RESTORE_TOKEN} from '../redux/actions/types';

const Index = () => {
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const dispatch = useDispatch();

  const handleDispath = useCallback(
    (userToken) => dispatch({type: RESTORE_TOKEN, token: userToken}),
    [dispatch],
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      handleDispath(userToken);
    };

    bootstrapAsync();
  }, []);

  if (auth.isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      {auth.token === null ? <AuthStackNavigator /> : <RootStackNavigator />}
    </NavigationContainer>
  );
};

export default Index;
