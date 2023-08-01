import React from 'react';
import { SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ConfirEmailScreen from './src/screens/ConfirmEmailScreen';


const App = () =>{
  return (
  
      <SafeAreaView style={styles.root}>
         
          <ConfirEmailScreen/>
         
      </SafeAreaView>
     
   
  );
}

const styles = StyleSheet.create({
 root:{
  flex: 1,
  backgroundColor: '#F9FBFC',
 }
});

export default App;