import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
