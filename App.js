import { Provider} from 'react-native-paper';
import { theme} from './src/core/theme';
import 'react-native-gesture-handler';

//navigators
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from "@expo/vector-icons";
import firebase from 'firebase';
import { StatusBar } from 'react-native';
// screens
import AutheLoadingSreen from './screens/AuthLoadingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import { ResetPasswordScreen } from './screens/Index';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import WriteLetterScreen from './screens/WriteLetter';
import { menuScreen } from './screens/Index';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

import { firebaseConfig } from './src/core/config';
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default function App() { 
  return (
    <Provider theme={theme}>
      <StatusBar backgroundColor='#4AC0D5' barStyle='light-content' />
      <NavigationContainer>
        <MyStack/>
      </NavigationContainer>
    </Provider>
  );
}
function MyStack(){
  return(
    <Stack.Navigator initialRouteName='AutheLoadingSreen'
        screenOptions={{headerShown:false}}>
          <Stack.Screen name='AutheLoadingSreen' component={AutheLoadingSreen}/>
          <Stack.Screen name='LoginScreen' component={LoginScreen}/>
          <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
          <Stack.Screen name='ResetPasswordScreen' component={ResetPasswordScreen}/>
          <Stack.Screen name='HomeScreen' component={TopNavigation}/>
        </Stack.Navigator>
  )
}
function TopNavigation(){
  return(
   <Tab.Navigator
   tabBarOptions={{
     headerShown:false,
     style:{
       backgroundColor: '#4AC0D5',
     }
   }}>
     <Tab.Screen name='Home' component={HomeScreen}
     options={{title:(props)=> <Ionicons name='home'size={25} color="#ffff" />}}
     />
     <Tab.Screen name='Write'  component={WriteLetterScreen}
      options={{title:(props)=> <Ionicons name='brush' size={25} color="#ffff"/>}}
      />
    <Tab.Screen name='Profile' component={ProfileScreen} 
     options={{title:(props)=> <Ionicons name='person' size={25} color="#ffff"/>}}
     />
    <Tab.Screen name='Menu' component={menuScreen} 
    options={{title:(props)=> <Ionicons name='menu' size={25} color="#ffff"/>}}
    />
   </Tab.Navigator>
  )
}

