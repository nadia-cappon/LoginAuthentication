/**import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirEmailScreen from './src/screens/ConfirmEmailScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import NewPasswordScreen from './src/screens/NewPasswordScreen';
import Navigation from './src/navigation';
const Navigation = () => {
  return (
    <NavigationContainer>
      <Text>Navigation</Text>
    </NavigationContainer>
  )
}

export default Navigation;


const styles = StyleSheet.create({})*/
import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from  "../screens/HomeScreen";


const Stack = createNativeStackNavigator();

const Navigation = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Sign In" component={SignInScreen}/>
                <Stack.Screen name="Sign Up" component={SignUpScreen}/>
                <Stack.Screen name="Confirm Email" component={ConfirmEmailScreen}/>
                <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen}/>
                <Stack.Screen name="New Password" component={NewPasswordScreen}/>
                <Stack.Screen name="Home Screen" component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;