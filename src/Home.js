import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

import { TabNavigator } from 'react-navigation';

import ParkListScreen from './ParkListScreen';
import MapViewScreen from './MapViewScreen';

const HomeStack = TabNavigator({
    ListView: {
        screen: ParkListScreen,
        navigationOptions:({navigation}) => ({

            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <Text>Menu</Text>
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    MapView: {
        screen: MapViewScreen
    }
}
    
);

export default HomeStack;