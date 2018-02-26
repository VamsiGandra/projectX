import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';


export default class HomeScreen extends Component {

    componentWillMount() {
        this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'HomeStack' })]
        }))
    }   

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to SignUp"
          onPress={() => this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'WelcomeStack' })]
        }))}
        />
      </View>
    );
    
  }

}
