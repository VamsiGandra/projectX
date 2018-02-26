import React, { Component } from 'react';

import { StackNavigator } from 'react-navigation';

import Splash from './Splash';
import SignIn from './SignIn';
import SignUp from './SignUp';

const WelcomeStack = StackNavigator({

        Splash : {
            screen: Splash,
            navigationOptions: {
                header: null,
              },
        },
        SignIn : {
            screen: SignIn,
        },
        SignUp : {
            screen: SignUp,
        },
},
{
    headerMode: 'none',
    }

);

export default WelcomeStack; 
