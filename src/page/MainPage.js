"use strict";

import React, { Component } from "react";
import { AppRegistry, StyleSheet, View ,Platform} from "react-native";
import MainImageButton from "../component/MainImageButton";
import TextButton from "../component/TextButton";
import px2dp from "../util/px2dp";
import MobilePage from "./MobilePage";
import MobileApp from "../containers/MobileApp";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StackNavigator } from "react-navigation";

class MainScene extends Component {
    static navigationOptions = {
        headerMode: 'none'
    }

    constructor(props){
        super(props);
        //MainScene.switchToMobilePage = MainScene.switchToMobilePage.bind(this);
    }


    _switchToMobilePage(userInfo) {

        const { navigate } = this.props.navigation;

        navigate('MobileApp');
        // this.props.navigator.push({
        //     component: MobileApp
        // });
    }


    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={[styles.height160, styles.row]}>
                    <TextButton text='历史上的今天'></TextButton>
                </View>
                <View style={[styles.height160, styles.row]}>
                    <View style={[styles.height160, styles.part_1_left]}>
                        <MainImageButton icon='phone' imgSize={px2dp(100)} onPress={this._switchToMobilePage.bind(this)} text='手机号归属地'></MainImageButton>
                    </View>
                    <View style={[styles.height160, styles.part_1_left]}>
                        <TextButton text='身份证查询'></TextButton>
                    </View>
                </View>
                <View style={[styles.height160, styles.row]}>
                    <View style={[styles.height160, styles.part_1_left]}>
                        <TextButton text='IP地址'></TextButton>
                    </View>
                    <View style={[styles.height160, styles.part_1_left]}>
                        <TextButton text='汇率查询'></TextButton>
                    </View>
                </View>
            </View>
        );
    }
}



const AppNavigator = StackNavigator({
  MainScene: { screen: MainScene },
  MobileApp: { screen: MobileApp }
},{
  initialRouteName: 'MainScene',
  //headerMode: 'none',
  mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

export default () => <AppNavigator />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  row: {
    flexDirection: "row",
    paddingTop: 20
  },
  font30: {
    fontSize: 30
  },
  height160: {
    height: 160
  },
  part_1_left: {
    flex: 1
    //borderWidth: 1,
    //borderColor: 'red'
  }
});
