import React from "react";
import {View, Text} from "react-native";
import {useTheme} from "@react-navigation/native";

const Index = () => {
  const {colors} = useTheme();

  return (
    <View style={{flex: 1, backgroundColor: colors.notification}}>
      <Text>Home</Text>
    </View>
  );
};

export default Index;
