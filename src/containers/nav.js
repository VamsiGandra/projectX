import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Text } from 'native-base';

import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import ParkList from './ParkList';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: (<Text style = {{ alignSelf: 'center', fontSize: 20}}>Login</Text>),
    },
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: (<Text style = {{ alignSelf: 'center', fontSize: 20}}>Home</Text>),
      headerLeft: (<Button style = {{ margin : 10 , display: 'relative'}} title='Menu' onPress = {() => console.log('pressed')}/>),
    },
  },
  ParkList: {
    screen: ParkList,
    navigationOptions: {
      headerTitle: (<Text style = {{ alignSelf: 'center', fontSize: 20}}>Login</Text>),
    },
  },
});

export default RootNavigator;
