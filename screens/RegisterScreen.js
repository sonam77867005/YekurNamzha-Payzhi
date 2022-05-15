import React,{useState} from 'react'
import Header from '../src/components/Header';
import Button from '../src/components/Button';
import Background from '../src/components/Background';
import Logo from '../src/components/Logo';
import RegisterTextInput from '../src/components/RegisterTextInput';
import { EmailValidator } from '../src/core/Helpers/EmailValidator';
import { PasswordValidator } from '../src/core/Helpers/PasswordValidator';
import { NameValidator } from '../src/core/Helpers/NameValidator';
import BackButton from '../src/components/BackButton';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { theme } from '../src/core/theme';
import { signUpUser } from '../src/api/auth-api';

export default function RegisterScreen({navigation}) {
    const [email,setEmail] = useState({value:"",error:""});
    const [password,setPassword] = useState({value:"",error:""});
    const [name,setName] = useState({value:"",error:""});
    const [loading, setLoading] = useState();


    const onSignUpPressed = async() =>{
       const nameError = NameValidator(name.value); 
       const emailError = EmailValidator(email.value);
       const passwordError = PasswordValidator(password.value);
      
       if(emailError || passwordError || nameError){
         setName({...name,error:nameError});
         setEmail({...email,error:emailError});
         setPassword({...password,error:passwordError});
       }
       setLoading(true)
       const response = await signUpUser({
         name: name.value,
         email: email.value,
         password: password.value
       })
       if (response.error){
         alert(response.error)
       }
       else{
         console.log(response.user.displayName)
         alert(response.user.displayName)
       }
       setLoading(false)
     }
  return (
      <Background>
        <BackButton goBack={navigation.goBack}/>
        <Header>Create An Account</Header>
        <RegisterTextInput
        value={name.value}
        error={name.error}
        errorText={name.error}
        onChangeText={(text)=> setName({value:text, error:"" })}
        label='Name'
        />
        <RegisterTextInput label='Email'
        value={email.value}
        error = {email.error}
        errorText ={email.error}
        onChangeText = {(text)=>setEmail({value:text,error:""})} 
        />
          <RegisterTextInput
           label='Password'
          secureTextEntry
        value={password.value}
        error = {password.error}
        errorText={password.error}
        onChangeText = {(text)=>setPassword({value:text,error:""})} 
        />
        <RegisterTextInput
           label='Write Anything About Yourself?'
          secureTextEntry
        value={password.value}
        error = {password.error}
        errorText={password.error}
        onChangeText = {(text)=>setPassword({value:text,error:""})} 
        />
        
        
      <Button loading={loading}  mode={'contained'} onPress ={onSignUpPressed}>Sign Up</Button>
      <View style={styles.row}>
        <Text style={{color:'white',}}>Already have an account? </Text>
         <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
           <Text style={styles.link}>Login</Text>
         </TouchableOpacity>
      </View>
      </Background>
    
  );
}
const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    marginTop:4,

    
  },
  link:{
    fontWeight:'bold',
    color:theme.colors.success,
  }
})


