"use strict";

import React, { Component, PropTypes } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  TouchableOpacity
} from "react-native";
import px2dp from "../util/px2dp";

export default class AccountCardContent extends Component {
  static PropTypes = {
    born: PropTypes.string,
    sex: PropTypes.string,
    att: PropTypes.string,
    postno: PropTypes.string,
    areano: PropTypes.string
  };

  render() {
    const propTitle = {
        born:"出生年月日",
        sex:"性别",
        att:"归属地",
        postno:"邮编",
        areano:"区号"
    };

    return (
      <View style={styles.mobileBox}>

        {Object.keys(propTitle).map((name: String) =>
            this.props[name]
          ? <View style={styles.mobileRow} key={name}>
              <View style={styles.title1}>
                <Text style={styles.titleText1}>{propTitle[name]}:</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.titleText2}>{this.props[name]}</Text>
              </View>
            </View>
          : null
        )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mobileBox: {
    paddingTop: px2dp(13),
    paddingLeft: px2dp(13),
    paddingRight: px2dp(13)
  },
  mobileRow: {
    flexDirection: "row"
  },
  title1: {
    width: px2dp(80),
    marginRight: px2dp(5)
  },
  titleText1: {
    textAlign: "right"
  },
  title2: {
    flex: 1
  }
});
