import React from 'react'
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../core/theme";
import { StyleSheet} from 'react-native'


export default function Button({mode,style,...props}) {
  return (
    <PaperButton
        style={[
            styles.button,
            mode === 'outlined' && {backgroundColor:theme.colors.lightblue},
            style,
        ]}
        labelStyle = {styles.text}
        mode ={mode}
        {...props}
 />
  )
}

const styles = StyleSheet.create({
    button:{
        width:'100%',
        marginVertical:10,
        paddingVertical:2,
        borderRadius:5,
    },
    text:{
        fontWeight:'bold',
        fontSize:15,
        lineHeight:26,
        color:'white',
        padding:15,
    }
})