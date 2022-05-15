import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'
import Background from '../src/components/Background'
import Header from '../src/components/Header';
import LetterButton from '../src/components/LetterButton';
const WriteLetter = () => {
  return (
    <Background>
      <Header>Choose According to your requirements</Header>
      <LetterButton  mode={'outlined'}>Choose Template</LetterButton>
       <LetterButton  mode={'outlined'}>Plain Template</LetterButton>
       <LetterButton  mode={'outlined'}>User Guidelines</LetterButton>
    </Background>
  )
}

export default WriteLetter

const styles = StyleSheet.create({})