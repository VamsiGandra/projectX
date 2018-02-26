import { DrawerNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';


import Home from './Home';
import LogOut from './components/LogOut';
import AccountInfo from './components/AccountInfo';

const HomeStack = DrawerNavigator({
    
    Home: {
        screen: Home,
    },
    LogOut: {
        screen: LogOut,
    },
    AccountInfo: {
        screen: AccountInfo,
        navigationOptions:({navigation}) => ({

            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Text>Menu</Text>
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    }
}
) ;

export default HomeStack;