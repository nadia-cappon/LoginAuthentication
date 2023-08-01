import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButtons =() =>{
    
    const onSignInFacebook = () =>  {
    console.warn('onSignInFacebook ');
  };
  
    const onSignInGoogle= () =>  {
      console.warn('onSignInGoogl');
    };
  
      const onSignInApple= () =>  {
        console.warn('onSignInApple');
   };

  return (
    <>
 <CustomButton 
 text="Sign  with Facebook"
 onPress={onSignInFacebook}
 bgColor="#E7EAF4"
 fgColor="#4765A9"
  />
        
<CustomButton 
text="Sign In with Google" 
onPress={onSignInGoogle} 
bgColor="#FAE9EA"
fgColor="#DD4D44" 
/>
        
<CustomButton 
text="Sign In with Apple" 
onPress={onSignInApple} 
bgColor="#e3e3e3"
fgColor="#363636"
/>
    </>
  );
};

const styles = StyleSheet.create({})
export default  SocialSignInButtons;