import React from "react";
import {View, ActivityIndicator} from "react-native";

const Index = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
    <ActivityIndicator animating size="large" color="#000" />
  </View>
);

export default Index;
