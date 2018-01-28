import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <MapView.Marker 
            coordinate={{
            latitude: 37.78825,
            longitude: -122.4324
            }}
          />
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom:0,
    position: 'absolute'
  }
});
