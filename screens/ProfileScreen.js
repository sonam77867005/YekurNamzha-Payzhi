import React from 'react';
import Header from '../src/components/Header';
import Background from '../src/components/Background';
import { View,Text } from 'react-native';



export default function ProfileScreen() {
  return (
    <Background>
        <Header>This is Profile Screen</Header>
        <View style={{alignItems:'center',justifyContent:'center',fontSize:40,}}>
          <Text>This is Sonam Wangchuk from GCIT</Text>
        </View>
    </Background>
  )
}