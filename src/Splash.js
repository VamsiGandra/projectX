import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import styled from 'styled-components';


const LogoContainer = styled.View`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.View`
  width: 100;
  height: 100;
`;



export default class Splash extends Component {

  componentDidMount() {

   setTimeout(() => this.props.navigation.navigate('SignIn'), 3000) ;
  }

  render() {
    return (
      <LogoContainer>
        <Image style = { styles.thumbnailStyle } source={require('./images/park.jpg')}/>
      </LogoContainer>
    );
  }
}


const styles = StyleSheet.create(
  {
      thumbnailStyle: {
          height: 200,
          width: 200,
          borderRadius: 5
      }
  }
);