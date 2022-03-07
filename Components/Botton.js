import { View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React from 'react';

import * as Animatable from 'react-native-animatable';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';




const Botton = (props) => {

const {text, onPress,}=props

  

  return (
    <View>
    

           <Pressable
                 style={styles.botonHome}
          onPress={onPress}                      
             >
             <View style={{paddingLeft:140}}>
             <Image style={styles.imgSubCat}  source={require('../assets/home.png')}/>     
             </View>       
             </Pressable>
         </View>
  );
};

export default Botton;


const styles = StyleSheet.create({
    botonHome: {       
        borderRadius:100,
        height:30,
        width:30,
       },
        imgSubCat:{
        height:30,
        width:70,
        marginRight:200,
        resizeMode: "contain",     
     
    },
    
})