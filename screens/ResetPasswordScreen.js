import React,{useState} from 'react'
import Header from '../src/components/Header';
import Button from '../src/components/Button';
import Background from '../src/components/Background';
import Logo from '../src/components/Logo';
import TextInput from '../src/components/TextInput';
import { EmailValidator } from '../src/core/Helpers/EmailValidator';
import BackButton from '../src/components/BackButton';
import { ResetPassword } from '../src/api/auth-api';



export default function ResetPasswordScreen({navigation}) {
    const [email,setEmail] = useState({value:"",error:""});
    const [loading,setLoading] = useState();

    const onResetPressed = async() =>{
        const emailError = EmailValidator(email.value);
        if(emailError){
            setEmail({...email,error: emailError});
        }
        setLoading(true)
        const response = await ResetPassword(email.value)
        if(response.error){
          alert(response.error)
        }
        else{
          navigation.replace('LoginScreen')
          alert("Reset password has been submited succesfully in your email!")
        
        }
        setLoading(false)
      
    }
  return (
      <Background>
        <BackButton goBack={navigation.goBack}/>
          <Logo/>

        <Header>Restore Password</Header>
        <TextInput label='Email'
        value={email.value}
        error = {email.error}
        errorText ={email.error}
        onChangeText = {(text)=>setEmail({value:text,error:""})} 
        description='You will recieve email with pasword reset link'
        />
      <Button  mode={'contained'} loading={loading} onPress ={onResetPressed}>send instructions</Button>
     
     
      </Background>
    
  );
}



