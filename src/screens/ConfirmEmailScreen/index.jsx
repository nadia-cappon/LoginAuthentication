import React, {useState} from 'react';
import {View,  StyleSheet,  ScrollView, Text} from 'react-native';
import CustomInPut from '../../components/CustomInPut';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';


const ConfirEmailScreen = () => {
  const [code, setCode] = useState('');

  const navigation = useNavigation();

 const onConfirmPressed = () =>  {
  navigation.navigate('HomeScreen');
 };


 const onResendPress = () =>  {
  navigation.navigate('SignIn');
 };


 const onSignInPress = () =>  {
  console.warn('onSignInPress');
};
 return (
  <ScrollView showsHorizontalScrollIndicator= {false}>
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email  </Text>

      <CustomInPut
        placeholder="Enter your confirmation code"
        value={code} 
        setValue={setCode} 
        />
       

      <CustomButton
       text="confirm"
        onPress={onConfirmPressed}
        bgColor="#498EDC"
        fgColor="#fff"
       
         />
    
    <CustomButton
       text="Resend code" 
       onPress={onResendPress} 
       type= "SECONDARY"
     
       />
    

<CustomButton
      text="Back to Sign in" 
      onPress={onSignInPress} 
      type="TERTIARY"
     
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



export default ConfirEmailScreen;