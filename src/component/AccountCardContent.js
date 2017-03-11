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
    const { born, sex, att, postno, areano } = this.props;

    return (
      <View style={styles.mobileBox}>
        {born
          ? <View style={styles.mobileRow}>
              <View style={styles.title1}>
                <Text style={styles.titleText1}>出生年月日:</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.titleText2}>{born}</Text>
              </View>
            </View>
          : null}
        {sex
          ? <View style={styles.mobileRow}>
              <View style={styles.title1}>
                <Text style={styles.titleText1}>性别:</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.titleText2}>{sex}</Text>
              </View>
            </View>
          : null}
        {att
          ? <View style={styles.mobileRow}>
              <View style={styles.title1}>
                <Text style={styles.titleText1}>归属地:</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.titleText2}>{att}</Text>
              </View>
            </View>
          : null}
        {postno
          ? <View style={styles.mobileRow}>
              <View style={styles.title1}>
                <Text style={styles.titleText1}>邮编:</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.titleText2}>{postno}</Text>
              </View>
            </View>
          : null}
        {areano
          ? <View style={styles.mobileRow}>
              <View style={styles.title1}>
                <Text style={styles.titleText1}>区号:</Text>
              </View>
              <View style={styles.title2}>
                <Text style={styles.titleText2}>{areano}</Text>
              </View>
            </View>
          : null}
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
  },
  titleText2: {}
});
