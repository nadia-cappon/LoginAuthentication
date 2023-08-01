import React, {useState} from 'react';
import {View,  StyleSheet,  ScrollView} from 'react-native';
import CustomInPut from '../../components/CustomInPut';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
const SignUpScreen = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  

 const onRegisterPressed = () =>  {
  console.warn('Sign in');
 };


 


 const onSignInPress = () =>  {
  console.warn('onSignInPress');
};
 return (
  <ScrollView showsHorizontalScrollIndicator= {false}>
    <View style={styles.root}>
      <Text style={styles.Title}>Create an account</Text>

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
    logo: {
      marginTop: 60,
      width: '70%',
      maxWidth: 300,
      maxHeight: 200,
    },
title: {

fontSize:24,
fontWeight: 'bold',
color: '#051C60',
margin: 10,

}

  });



export default SignUpScreen;