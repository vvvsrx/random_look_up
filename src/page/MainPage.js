"use strict";

import React, {
    Component
} from "react";
import {
    AppRegistry,
    StyleSheet,
    View,
    Platform
} from "react-native";
import MainImageButton from "../component/MainImageButton";
import TextButton from "../component/TextButton";
import px2dp from "../util/px2dp";
import MobileApp from "../containers/MobileApp";
import AccountCardApp from "../containers/AccountCardApp"
//import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
    StackNavigator
} from "react-navigation";

class MainScene extends Component {
    static navigationOptions = {
        header: {
            visible: false
        }
    }

    _switchToPage(appName,text) {
        const {
            navigate
        } = this.props.navigation;

        navigate(appName, { title: text });
    }

    render() {
        const {
            navigate
        } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={[styles.height160, styles.row]}>
                    <TextButton text='历史上的今天'></TextButton>
                </View>
                <View style={[styles.height160, styles.row]}>
                    <View style={[styles.height160, styles.part_1_left]}>
                        <MainImageButton icon='phone-classic' imgSize={px2dp(100)} onPress={this._switchToPage.bind(this,'MobileApp','手机号归属地')} text='手机号归属地'></MainImageButton>
                    </View>
                    <View style={[styles.height160, styles.part_1_left]}>
                        <MainImageButton icon='account-card-details' imgSize={px2dp(100)} onPress={this._switchToPage.bind(this,'AccountCardApp','身份证查询')} text='身份证查询'></MainImageButton>
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
    MainScene: {
        screen: MainScene
    },
    MobileApp: {
        screen: MobileApp
    },
    AccountCardApp:{
        screen:AccountCardApp
    }
    }, {
    initialRouteName: 'MainScene',
    headerMode: 'screen',
    //mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

export default () => < AppNavigator /> ;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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