import React , { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import DrawerStack from './DrawerStack';


const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: '#4C3E54'},
      title: 'Welcome!',
      headerTintColor: 'white',
      gesturesEnabled: true
    }),
}
);


export default DrawerNavigation;