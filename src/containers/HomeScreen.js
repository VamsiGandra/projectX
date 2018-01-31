import React, { Component } from 'react';
import { View, Text, BackHandler } from 'react-native';
import { Container, Header, Content, Input, Item, Button, InputGroup, Icon } from 'native-base';
import Search from './Search';


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
            <Search />
            <Button style= {{ marginTop: 50, padding: 50}}
            onPress = {() => this.props.navigation.navigate('ParkList')}
            ><Text>Go</Text></Button> 
            </View>           
        );
    }
}