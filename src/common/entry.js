"use strict";

import React, { Component } from "react";
import { Provider } from "react-redux";
// import { Navigator } from "react-native";
import MainPage from "../page/MainPage";
import configureStore from "../store/configureStore";

const store = configureStore();

export default class Navigation extends Component {
  render() {
    return (
      <Provider store={store}>
        {/*<Navigator
          initialRoute={{ component: MainPage }}
          renderScene={(route, navigator) => {
            return <route.component navigator={navigator} {...route.args} />;
          }}
        />*/}
        <MainPage />
      </Provider>
    );
  }
}

