import React, {useState} from 'react';
import {View, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import logo from '../../../assets/images/png-logo-1.png';
import CustomInPut from '../../components/CustomInPut';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignInScreen = () => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {height} = useWindowDimensions();



 const onSignInPressed = () =>  {
  console.warn('Sign in');
 };


 const onForgotPasswordPressed = () =>  {
  console.warn('onForgotPasswordPressed');
 };

const onSignInFacebook = () =>  {
  console.warn('onSignInFacebook ');
};

  const onSignInGoogle= () =>  {
    console.warn('onSignInGoogl');
  };

    const onSignInApple= () =>  {
      console.warn('onSignInApple');
 };
 const onSignUpPress = () =>  {
  console.warn('onSignUpPress');
};
 return (
  <ScrollView showsHorizontalScrollIndicator= {false}>
    <View style={styles.root}>
      <Image 
      source ={logo} 
      style={[styles.logo, {height: height * 0.3}]}
      resizeMode="contain"
      />

      <CustomInPut
        placeholder="Username"
        value={username} 
        setValue={setUsername} 
        />
      <CustomInPut  
      placeholder="Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry
      
      />

      <CustomButton
       text="Sign In"
        onPress={onSignInPressed}
        bgColor="#498EDC"
        fgColor="#fff"
         />
      <CustomButton
       text="Forgot password?" 
      onPress={onForgotPasswordPressed} 
      type="TERTIARY" 
      fgColor="#8C9196"
    
      />

    <SocialSignInButtons />
<CustomButton
       text="Dont have an acount? Create One" 
      onPress={onSignUpPress} 
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


  });



export default SignInScreen;