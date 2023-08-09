import React, {useState} from 'react';
import {View,  StyleSheet,  ScrollView, Text} from 'react-native';
import CustomInPut from '../../components/CustomInPut';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';  

const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  
const navigation = useNavigation();
 

 const onSendPressed = () =>  {
  navigation.navigate('NewPassword');
 };


 const onSignInPress = () =>  {
  console.warn('onSignInPress');
};
 return (
  <ScrollView showsHorizontalScrollIndicator= {false}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password </Text>

      <CustomInPut
        placeholder="Username"
        value={username} 
        setValue={setUsername} 
        />
       

      <CustomButton
       text="Send"
        onPress={onSendPressed}
        bgColor="#498EDC"
        fgColor="#fff"
       
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



export default ForgotPasswordScreen ;