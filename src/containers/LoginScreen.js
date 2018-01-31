import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base';

export default class LoginScreen extends Component {
    render() {
            return (
            <Container>
                
                <Content>
                <Form>
                    <Item floatingLabel>
                    <Label>Username</Label>
                    <Input />
                    </Item>
                    <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                    </Item>
                </Form>
                <Button block info
                onPress={() => this.props.navigation.navigate('Home')}
                style = {{ margin : 10}}
                >
                <Text>Login</Text>
                </Button>

                </Content>
                
            </Container>
        );
    }
}