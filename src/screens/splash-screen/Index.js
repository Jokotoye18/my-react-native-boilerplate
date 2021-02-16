import React from "react";
import {View, ActivityIndicator} from "react-native";
import LottieView from "lottie-react-native";

const Index = () => (
  <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
    <LottieView
      source={require("../../assets/lottie-files/loader.json")}
      autoPlay
      loop
    />
  </View>
);

export default Index;
