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

export default class MobileContent extends Component {
  static propTypes = {
    style_citynm: PropTypes.string,
    att: PropTypes.string,
    area: PropTypes.string,
    postno: PropTypes.string,
    operators: PropTypes.string,
    ctype: PropTypes.string
  };

  render() {
    const propTitle = {
        style_citynm:"省份",
        att:"城市",
        area:"区号",
        postno:"邮编",
        operators:"运营商",
        ctype:"卡类型"
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
    width: px2dp(60),
    marginRight: px2dp(5)
  },
  titleText1: {
    textAlign: "right"
  },
  title2: {
    flex: 1
  }
});
