import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../src/components/Background'
import Button from '../src/components/Button';
import { logoutUser } from '../src/api/auth-api';
import Header from '../src/components/Header';


const Menu = () => {
  return (
<Background>
<Header>This is menu Screen</Header>
      <Button mode="contained"
        onPress={()=>{
          logoutUser();
        }}>
          Logout</Button>

</Background>
  )
}

export default Menu

const styles = StyleSheet.create({})