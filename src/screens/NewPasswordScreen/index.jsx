import React, {useState} from 'react';
import {View,  StyleSheet,  ScrollView, Text} from 'react-native';
import CustomInPut from '../../components/CustomInPut';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../HomeScreen';

const NewPasswordScreen = () => {
  
const [code, setCode] = useState('');
const [newPassword, setNewPassword] = useState('');

const navigation = useNavigation();


 const onSubmitPressed = () =>  {
 navigation.navigate('HomeScreen');
 };


 const onSignInPress = () =>  {
  navigation.navigate('SignIn');
};
 return (
  <ScrollView showsHorizontalScrollIndicator= {false}>
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password </Text>

      <CustomInPut
        placeholder="Code"
        value={code} 
        setValue={setCode} 
        />
       
       <CustomInPut
        placeholder="Enter your new passeword"
        value={newPassword} 
        setValue={setNewPassword} 
        />

     
    
    <CustomButton
       text="Submit"
        onPress={onSubmitPressed}
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



export default NewPasswordScreen ;