/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import Navigation from './src/common/entry';

export default class random_look_up extends Component {
  render() {
    return (<Navigation/>);
  }
}

AppRegistry.registerComponent('random_look_up', () => random_look_up);
