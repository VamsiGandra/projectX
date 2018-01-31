import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { Container, Header, Content, Input, Item, Button, InputGroup, Icon } from 'native-base';
import Search from './Search';
import RootTabs from './ParkList';

export default class HomeScreen extends Component {

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', function() {
            BackHandler.exitApp()
           return true;
          });
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', function() {
            BackHandler.exitApp()
           return true;
          });
    }    

    render() {
        return (    
            <View>
            <RootTabs/>
            </View>           
        );
    }
}