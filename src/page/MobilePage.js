"use strict";
import React, { Component, PropTypes } from "react";
import { StyleSheet, View, Text, Platform, TextInput } from "react-native";
//import NavigationBar from "../component/SimpleNavigationBar";
//import PageComponent from "./BackPageComponent";
import px2dp from "../util/px2dp";
import MobileContent from "../component/MobileContent";
import theme from "../common/theme";
import Icon from "react-native-vector-icons/Ionicons";

class MobilePage extends Component {
 constructor(props) {
    super(props);
    this.state = 
    { 
      text: this.props.mobile.text
    };
  }

  render() {
    console.log(this.props);
    let model = this.props.mobile.toObject();
    console.log(model);
    return (
      <View>
        {/*<NavigationBar title="返回" />*/}
        <View style={styles.container}>
          <TextInput
            style={styles.searchBar}
            value={this.state.text}
            autoFocus={true}
            keyboardType="numeric"
            maxLength={20}
            onChangeText={text => this._textInputChange({ text })}
            onSubmitEditing={this._getData.bind(this)}
          />
        </View>
        {
          model.isShowMobileContent ?
          <MobileContent {...this.props.fetch.data} />
          : null
        }
      </View>
    );
  }

  _textInputChange(obj) {

    this.props.textInputChange(obj);

    this.setState(obj);
  }

  _getData() {
    let model = this.props.mobile.toObject();
    this.props.GetDataAsync("https://apis.juhe.cn/mobile/get?key=7685e46f4ecae94af827e9adb0e847fb&dtype=json&phone=" + model.text)
    this.props.getData(this.props.fetch.data);
  }
}

// MobilePage.propTypes = {
//   textInputChange: PropTypes.func.isRequired,
//   getData: PropTypes.func.isRequired,
//   mobile: PropTypes.object.isRequired
// };

const styles = StyleSheet.create({
  container: {
    height: theme.actionBar.height,
    //backgroundColor: theme.actionBar.backgroundColor,
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? px2dp(20) : 0
  },
  searchBar: {
    flexDirection: "row",
    height: px2dp(33),
    paddingLeft: px2dp(13),
    paddingRight: px2dp(13),
    backgroundColor: "#ccc",
    alignItems: "center",
    marginRight: px2dp(8),
    marginLeft: px2dp(8),
    borderRadius: px2dp(3),
    width: 200
  },
  searchBar2: {
    flexDirection: "row",
    height: px2dp(33),
    alignItems: "center"
  },
  text: {
    fontSize: px2dp(15),
    color: "#fff",
    marginLeft: px2dp(13)
  }
});

export default MobilePage;
