'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Platform,
  TextInput
} from 'react-native';
import NavigationBar from '../component/simpleNavigationBar';
import PageComponent from './backPageComponent';
import px2dp from '../util/px2dp';
import MobileContent from '../component/mobileContent';
import theme from '../common/theme';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MobilePage extends PageComponent {
  constructor(props) {
    super(props);
    this.state = 
    { 
      text: '', 
      isShowHit: true ,
      isShowMobileContent : false,
      mobileData:{
        // province:"上海",
        // city:"111",
        // areacode:"021",
        // zip:"200000",
        // company:"联通",
        // card:"222"
      }
    };
  }


  render() {
    return (
      <View>
        <NavigationBar title="返回" backOnPress={this._handleBack.bind(this)} />
        <View style={styles.container}>
          <TextInput
            style={styles.searchBar}

            value={this.state.text}
            autoFocus={true}
            keyboardType="numeric"
            maxLength={20}
            onChangeText={(text) => this._textInputChange({ text })}
            onSubmitEditing={this._getData.bind(this)}
            >
            {this._hitText()}
          </TextInput>
        </View>
        {this._prepareData()}
      </View>
    )
  }

  _prepareData()
  {
    if (!this.state.isShowMobileContent) {
      return null;
    }
    return(
        <MobileContent {...this.state.mobileData} />
    )
  }

  _hitText() {
    if (!this.state.isShowHit) {
      return null;
    }
    return (
      <View style={styles.searchBar2}>
        <Icon name="ios-search" size={px2dp(25)} color="white" />
        <Text style={styles.text}>手机号码</Text>
      </View>
    )
  }

  _textInputChange(obj) {
    if (obj.text === "") {
      this.state.isShowHit = true;
    } else {
      this.state.isShowHit = false;
    }
    this.setState(obj);
  }

  _getData() {
    var url = 'https://apis.juhe.cn/mobile/get?key=7685e46f4ecae94af827e9adb0e847fb&dtype=json&phone=' + this.state.text;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        if(responseData.resultcode === "200")
        {
          let data = responseData.result;
          var tmpState = this.state;
          tmpState.mobileData = data;
          tmpState.isShowMobileContent = true;
          this.setState(tmpState);
        }else{

        }
      }).done();
  }
}


const styles = StyleSheet.create({
  container: {
    height: theme.actionBar.height,
    //backgroundColor: theme.actionBar.backgroundColor,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? px2dp(20) : 0
  },
  searchBar: {
    flexDirection: 'row',
    height: px2dp(33),
    paddingLeft: px2dp(13),
    paddingRight: px2dp(13),
    backgroundColor: '#ccc',
    alignItems: 'center',
    marginRight: px2dp(8),
    marginLeft: px2dp(8),
    borderRadius: px2dp(3)
  },
  searchBar2: {
    flexDirection: 'row',
    height: px2dp(33),
    alignItems: 'center',
  },
  text: {
    fontSize: px2dp(15),
    color: '#fff',
    marginLeft: px2dp(13)
  }
});