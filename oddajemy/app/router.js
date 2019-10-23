import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
// import { createStackNavigator } from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';

import List from './screens/List';
import Profile from './screens/Profile';

let screen = Dimensions.get('window');

const TabNavigator = createBottomTabNavigator({
    List: {
        screen: List,
        navigationOptions: {
            tabBarLabel: 'List',
            tabBarIcon: ({ tintColor }) => <Icon name="list" type="entypo" size={28} color={tintColor} />
        },
    },
    Profile: {
        screen: Profile,
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor} />
    },
});

export default createAppContainer(TabNavigator);

// export const createRootNavigator = () => {
//     return createStackNavigator(
//         {
//         Tabs: {
//             screen: Tabs,
//             navigationOptions: {
//             gesturesEnabled: false
//             }
//         }
//         },
//     );
// };