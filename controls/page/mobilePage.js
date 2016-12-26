'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import NavigationBar from '../component/simpleNavigationBar';
import PageComponent from './backPageComponent';





export default class MobilePage extends PageComponent {
  render() {
    return (
      <View>
      <NavigationBar title="返回" backOnPress={this._handleBack.bind(this)}/>
        <Text>Mobile</Text>
      </View>
      )
  }
}