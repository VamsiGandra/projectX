import { View, Text, Image, StyleSheet } from 'react-native';
import React, {  Component } from 'react';

import { Icon, Button } from 'native-base';

import Card from './Card';
import CardSection from './CardSection';


export default class ParkCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <CardSection >
                    <View>
                        <Image
                            style = { styles.thumbnailStyle }
                            source = { { uri : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Civic_Theatre_Auckland.jpg/1200px-Civic_Theatre_Auckland.jpg'} }
                        />
                    </View>
                    <View style= { styles.contentStyle }>
                        <Text style= { styles.textStyle }> Civic Theatre {this.props.yo}</Text>
                        <Text style= { styles.textStyle }> Price: $ 4.00/hr</Text>
                        <Text style= { styles.textStyle }> Available Spaces: 15</Text>
                        <Text > Distance from your destination: 700m</Text>
                    </View>
                    <View style = { style = styles.actionContentStyle}>
                        <Button>
                            <Icon 
                            name="md-return-right" />
                            
                        </Button>
                    </View>
                </CardSection>
            </Card>
        );
    }
}


const styles = StyleSheet.create(
    {
        thumbnailStyle: {
            height: 100,
            width: 75,
            borderRadius: 5
        },
        contentStyle: {
            marginLeft: 10,
        },
        textStyle: {
            fontSize: 18
        },
        actionContentStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10
        },
        buttonIconStyle: {
            height:100,
            width: 100
        },
    }
);
