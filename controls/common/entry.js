'use strict';

import React, {Component} from 'react';
import {Navigator} from 'react-native';
import MainPage from '../page/mainPage';

export default class Navigation extends Component
{
    render()
    {
        return(
        <Navigator 
            initialRoute={{component: MainPage}}
            renderScene={(route, navigator) => {
                return <route.component navigator={navigator} {...route.args}/>
                }
            }/>
        );
    }
}