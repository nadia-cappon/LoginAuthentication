import React, {useState} from 'react';
import {View,  StyleSheet,  ScrollView, Text} from 'react-native';
import CustomInPut from '../../components/CustomInPut';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';



const SignUpScreen = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    console.warn("Registered")
    // Validate
    navigation.navigate('Confirm Email')
  }

  const onSignInPress = () => {
    console.warn("onSignInPressed")
     // Validate
     navigation.navigate('Sign In')
  }

  const onForgotPasswordPressed = () => {
    console.warn("onForgotPasswordPressed")
    // Naviguer vers l'écran de récupération de mot de passe
    navigation.navigate('Forgot Password')
  }

 return (
  <ScrollView showsHorizontalScrollIndicator= {false}>
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>

      <CustomInPut
        placeholder="Username"
        value={username} 
        setValue={setUsername} 
        />
        <CustomInPut  
      placeholder="Email" 
      value={email} 
      setValue={setEmail} 
/>
      <CustomInPut  
      placeholder="Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry
      
      />
 <CustomInPut  
      placeholder="Repeat Password" 
      value={passwordRepeat} 
      setValue={setPasswordRepeat} 
      secureTextEntry
      
      />
      

      <CustomButton
       text="Register"
        onPress={onRegisterPressed}
        bgColor="#498EDC"
        fgColor="#fff"
         />
      <CustomButton
       text="Forgot password?" 
      onPress={onForgotPasswordPressed} 
      type="TERTIARY" 
      fgColor="#8C9196"
    
      />

    
<SocialSignInButtons/>


<CustomButton
       text="have an acount? Sing in" 
      onPress={onSignInPress} 
      type="TERTIARY"
     
      fgColor="#8C9196" 
       />
       

    </View>
    </ScrollView>
  );
};


const styles =StyleSheet.create( {
 root: {
  alignItems: 'center',
  padding: 20,
 },
    
title: {
  marginTop: 60,
fontSize:24,
fontWeight: 'bold',
color: '#051C60',
margin: 10,

}

  });



export default SignUpScreen;