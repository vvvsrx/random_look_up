"use strict";

import React, { Component } from "react";
import { Provider } from "react-redux";
import MainPage from "../page/MainPage";
import configureStore from "../store/configureStore";

const store = configureStore();

export default class Navigation extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    );
  }
}

