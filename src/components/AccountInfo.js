import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class AccountInfo extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Account Info Screen</Text>
      </View>
    );
  }
}
