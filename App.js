import React from "react";
import {StatusBar} from "react-native";
import {Provider} from "react-redux";
import store from "./src/redux/store";

import NavigationContainerComponent from "./src/navigations/Index";

const App = () => (
  <>
    <StatusBar
      animated
      backgroundColor="#000"
      barStyle="light-content"
      showHideTransition="slide"
    />
    <Provider store={store}>
      <NavigationContainerComponent />
    </Provider>
  </>
);

export default App;
