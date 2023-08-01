import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';

const CustomButton = ({ onPress, text, type= "PRIMARY", bgColor, fgColor }) => {
 
  return (
    <Pressable 
    onPress={onPress} 
    style={[styles.container,
    styles[`container_${type}`],
    bgColor ? {backgroundColor: bgColor} : {}
    ]}>
    <Text 
    style={[
    styles.text, 
    styles[`text_${type}`],
    fgColor ? {color: fgColor} : {}
  ]}
  
  >{text}
    
      </Text>
    </Pressable>
  );
};



const styles = StyleSheet.create({

container: {
width: '100%',

padding: 15,
marginVertical: 5,

alignItems: 'center',
borderRadius: 5,
},

container_PRIMARY: {
backgroundColor: '#1D5ABD',

},
container_SECONDARY: {
  borderColor: '#1D5ABD',
  borderWidth: 2,
},
container_TERTIARY: {
 
},

text:{
  fontWeight: 'bold',
  color: 'white',
},

text_SECONDARY:{
  color: '#3871F3',
},

 text_TERTIARY : {
  color : 'gray',
 },

});


export default CustomButton;