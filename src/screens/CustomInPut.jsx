import {View, StyleSheet, Text, TextInput } from 'react-native';
import React from 'react';

const CustomInPut = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
      value={value}
      onChangeText={setValue}
      placeholder={placeholder}
      styles={styles.input} 
      secureTextEntry={secureTextEntry}// pour rendre le texte invisible
      /> 
    </View>
  );
};
const styles = StyleSheet.create({
container: {
  backgroundColor: 'white',
  width:'100%',

  borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

paddingHorizontal: 10,
    marginVertical: 5,
},
input:{},

});

export default CustomInPut;