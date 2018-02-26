import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button , Icon} from 'native-base';
import { NavigationActions } from 'react-navigation';

export default class SignIn extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign In</Text>
        <Button block
          onPress={() => this.props.navigation.navigate('SignUp')}
        > 
            <Icon name='home' />
            <Text>Home</Text>
        </Button>
        <Button
          block danger
          onPress={() => this.props.navigation.dispatch(NavigationActions.reset({
            index: 0,
            key: null,
            actions: [NavigationActions.navigate({ routeName: 'HomeStack' })]
        }))}
        >
            <Icon name='logo-googleplus' />
            <Text>Sign In</Text>
        </Button>
      </View>
    );
  }
}
