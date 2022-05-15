import React,{useState} from 'react'
import Header from '../src/components/Header';
import Button from '../src/components/Button';
import Background from '../src/components/Background';
import Logo from '../src/components/Logo';
import TextInput from '../src/components/TextInput';
import PasswordTextInput from '../src/components/PasswordTextInput';
import { EmailValidator } from '../src/core/Helpers/EmailValidator';
import { PasswordValidator } from '../src/core/Helpers/PasswordValidator';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { theme } from '../src/core/theme';
import { loginUser } from '../src/api/auth-api';
import { StatusBar } from 'react-native';

export default function LoginScreen({navigation}) {
    const [email,setEmail] = useState({value:"",error:""});
    const [password,setPassword] = useState({value:"",error:""});
    const [loading,setLoading] = useState();
    const onLoginPressed = async() =>{
        const emailError = EmailValidator(email.value);
        const passwordError = PasswordValidator(password.value)
        if(emailError || passwordError){
            setEmail({...email,error: emailError});
            setPassword({...password,error: passwordError});
        }
        setLoading(true)
        const response = await loginUser({
          email: email.value,
          password: password.value,
        });
        if(response.error) {
          alert(response.error);
        }
        // else{
        //   alert(response.user.displayName);
        // }
        else {
          navigation.replace('HomeScreen')
        }
        setLoading(false)
        
   
    }

  return (
      <Background>
            <StatusBar backgroundColor='#2D4A8E' barStyle='light-content' />
          <Logo/>

        <Header>Login To Your Account</Header>
        <TextInput
        label="Email"
        value={email.value}
        error = {email.error}
        errorText ={email.error}
        onChangeText = {(text)=>setEmail({value:text,error:""})} 
        />
          <PasswordTextInput
           label='Password'
          secureTextEntry
        value={password.value}
        error = {password.error}
        errorText={password.error}
        onChangeText = {(text)=>setPassword({value:text,error:""})} 
        />
        <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={()=> navigation.replace('ResetPasswordScreen')}>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
        </View>
      <Button  mode={'contained'} loading={loading} onPress ={onLoginPressed}>Login</Button>
      <View style={styles.row}>
        <Text style={{color:'white',fontSize:17,}}>Don't have an account? </Text>
         <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
           <Text style={styles.link}>Sign Up</Text>
         </TouchableOpacity>
      </View>
     
      </Background>
    
  );
}
const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    marginTop:10,
    marginBottom:100,

    
  },
  link:{
    fontWeight:'bold',
    fontSize:17,
    color:theme.colors.success,
  },
  forgotPassword:{
    width:'100%',
    alignItems:'flex-end',
    marginBottom:24,

  },
  forgot:{
    fontSize:15,
    color:theme.colors.success,
  }
})


