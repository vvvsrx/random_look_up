'use strict';

import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Platform, TouchableOpacity } from 'react-native';




export default class MobileContent extends Component {

    static propTypes = {
        province: PropTypes.string,
        city: PropTypes.string,
        areacode: PropTypes.string,
        zip: PropTypes.string,
        company: PropTypes.string,
        card: PropTypes.string
    };

    render() {
        const {province, city, areacode, zip, company, card} = this.props;
        return (
            <View style={styles.mobileBox}>
                {
                    province ? null :
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>省份:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{province}</Text>
                            </View>
                        </View>
                }

                {
                    city ? null :
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>城市:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{city}</Text>
                            </View>
                        </View>
                }

                {
                    areacode ? null :
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>区号:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{areacode}</Text>
                            </View>
                        </View>
                }

                {
                    zip ? null :
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>邮编:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{zip}</Text>
                            </View>
                        </View>
                }

                {
                    company ? null :
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>运营商:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{company}</Text>
                            </View>
                        </View>
                }

                {
                    card ? null :
                        <View style={styles.mobileRow}>
                            <View style={styles.title1}>
                                <Text style={styles.titleText1}>卡类型:</Text>
                            </View>
                            <View style={styles.title2}>
                                <Text style={styles.titleText2}>{card}</Text>
                            </View>
                        </View>
                }
            </View>

        );
    }
}



const styles = StyleSheet.create({
    mobileBox: {},
    mobileRow: {},
    title1: {},
    titleText1: {},
    title2: {},
    titleText2: {},
});