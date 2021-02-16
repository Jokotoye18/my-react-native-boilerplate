import React from "react";
import {StatusBar} from "react-native";
import {Provider} from "react-redux";
// local import
import store from "./src/redux/store";

import NavigationContainerComponent from "./src/navigations/Index";

const App = () => {
  return (
    <>
      <StatusBar
        animated
        backgroundColor="#000"
        barStyle="light-content"
        showHideTransition="slide"
      />
      <NavigationContainerComponent />
    </>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
