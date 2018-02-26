import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from 'react-redux';
import { createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './src/reducers';
import RootStack from './src/RootStack';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={ createStore(
        reducers,
        composeWithDevTools()
      ) }>
      <RootStack />
      </Provider>
    );
  }
}

