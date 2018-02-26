import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class ListView extends Component {

  componentWillMount() {
    
}  

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>List View</Text>
      </View>
    );

  }

}

