import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Dimensions,
  Button,
  ScrollView
} from 'react-native';

import { Picker, Form, Text } from 'native-base';
const Item = Picker.Item;
import MapView from 'react-native-maps';
import { updateParkingLocations } from './actions/MainActions';
import { connect } from 'react-redux';

import SearchBar from './components/SearchBar';
import ParkCard from './components/ParkCard';
import CardSection from './components/CardSection';


class ParkListScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selected1: "key1"
        };
      }

    onValueChange(value: string) {
    this.setState({
        selected1: value
    });
    }

    componentWillMount() {
        this.props.updateParkingLocations();
    }

    render() {
        {console.log(this.props.locations);}
        return (    
            <View>
                <SearchBar/> 
                
                <View style = {{ marginTop: 70, zIndex: -1}}>
                    
                    <Text>Filter</Text>
                    <Picker
                    iosHeader="Select one"
                    mode="dropdown"
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange.bind(this)}
                    >
                    <Item label="Wallet" value="key0" />
                    <Item label="ATM Card" value="key1" />
                    </Picker>
                  
                   
                    <ScrollView>
                        <ParkCard/>
                        <ParkCard/>
                        <ParkCard/>
                        <ParkCard/>
                    </ScrollView>
                   
                </View>
            </View>           
        );
    }
}

const styles = StyleSheet.create({
    cardStyle: {
      marginTop: 50,
    }
  });

const mapStateToProps = (state) => {
    
    
    const { locations } = state.auth.parkLocations ;
    return locations;
};


export default connect(null, {updateParkingLocations})(ParkListScreen);