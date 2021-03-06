"use strict";
import React, { Component, PropTypes } from "react";
import { StyleSheet, View, Text, Platform, TextInput } from "react-native";
import px2dp from "../util/px2dp";
import MobileContent from "../component/MobileContent";
import theme from "../common/theme";
//import Icon from "react-native-vector-icons/Ionicons";

class MobilePage extends Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.title}`,
  };

 constructor(props) {
    super(props);
    this.state = 
    { 
      text: ''//this.props.mobile.get('text')
    };
  }

  render() {
    let model = this.props.mobile.toObject();
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            style={styles.searchBar}
            value={this.state.text}
            autoFocus={true}
            keyboardType="numeric"
            onChangeText={text => this._textInputChange({ text })}
            onSubmitEditing={this._getData.bind(this)}
            underlineColorAndroid='transparent'
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
    this.props.GetDataAsync("https://sapi.k780.com/?app=phone.get&appkey=23827&sign=ebdd4157eb1b6b3cb20b6957db8c676f&format=json&phone=" + model.text)
    this.props.getData(this.props.fetch.data);
  }
}

MobilePage.propTypes = {
  textInputChange: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  mobile: PropTypes.object.isRequired
};

const styles = StyleSheet.create({
  container: {
    height: theme.actionBar.height,
    justifyContent: "center",
    paddingTop: px2dp(20),
    // paddingRight: 5,
    // paddingLeft: 5,
  },
  searchBar: {
    paddingVertical: 0,
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
