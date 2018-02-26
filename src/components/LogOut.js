import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class LogOut extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Logout screen</Text>
        <Button
          title="LogOut"
          onPress={() => this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'Welcome' })]
        }))}
        />
      </View>
    );
  }
}
