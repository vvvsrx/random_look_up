"use strict";
import React, { Component, PropTypes } from "react";
import { StyleSheet, View, Text, Platform, TextInput } from "react-native";
import px2dp from "../util/px2dp";
import theme from "../common/theme";
import AccountCardContent from "../component/AccountCardContent"




class AccountCardPage extends Component {
  static navigationOptions = {
    title: ({ state }) => `${state.params.title}`,
  };

 constructor(props) {
    super(props);
    this.state = 
    { 
      text: ''//this.props.accountCard.get('text')
    };
  }

  _textInputChange(obj) {

    this.props.textInputChange(obj);

    this.setState(obj);
  }

  _getData() {
    this.props.GetDataAsync("https://sapi.k780.com/?app=idcard.get&appkey=23827&sign=ebdd4157eb1b6b3cb20b6957db8c676f&format=json&idcard=" + this.props.accountCard.get('text'))
    this.props.getData(this.props.fetch.data);
  }

  render() {
    let model = this.props.accountCard.toObject();
    return (
      <View>
        <View style={styles.container}>
          <TextInput
            style={styles.searchBar}
            value={this.state.text}
            autoFocus={true}
            keyboardType="numeric"
            underlineColorAndroid='transparent'
            onChangeText={text => this._textInputChange({ text })}
            onSubmitEditing={this._getData.bind(this)}
          />
        </View>
        {
          model.isShowContent ?
          <AccountCardContent {...this.props.fetch.data} />
          : null
        }
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    height: theme.actionBar.height,
    justifyContent: "center",
    paddingTop: px2dp(20),
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
    width: 300
  }
});

export default AccountCardPage;
