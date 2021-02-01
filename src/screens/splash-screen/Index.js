import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

const Index = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator animating={true} size="large" color="#000" />
    </View>
  );
};

export default Index;
