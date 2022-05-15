import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TextInput as Input } from "react-native-paper";
import {theme} from "../core/theme";

 export default function TextInput({errorText, description,...props}) {
   return (
     <View style ={styles.container}>
      <Input
            right={<Input.Icon name="eye" />}
            left={<Input.Icon name="lock" />}
      style={styles.input}
      selectionColor = {theme.colors.primary}
      underlineColor ="transparent"
      mode="outlined"
      {...props}
      />
      {description && !errorText ?(
          <Text style={styles.description}>{description}</Text>
      ):null}{
          errorText? <Text style ={styles.errorText}>{errorText}</Text>
          :null}
      
     </View>
   )
 }
 
 const styles = StyleSheet.create({
     container:{
         width:'100%',
         marginVertical:12,
         
     },
     input:{
         backgroundColor:theme.colors.surface,
       
         
     },
     description:{
         fontSize:13,
         color:theme.colors.secondary,
         paddingTop:8,
     },
     errorText:{
        fontSize:13,
        color:theme.colors.error,
        paddingTop:8,

     }
 })