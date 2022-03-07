
import React from 'react';
import {Text, StyleSheet, View, Button, StatusBar, Pressable, Image} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';






const Suspension = ({navigation}) => {

const botonSiguiente = () => {
        navigation.navigate('Home')
        
       
    }





return (  

<View style={styles.contenedorSus}>

    <View style={styles.card}>
        <View style={styles.cardInt1}>
        <Image  style={styles.cardImg}   source={require('../../assets/terminales.png')}/> 
        </View>
         <TouchableHighlight
               onPress={botonSiguiente}
               style={{borderRadius: 20,}}                            
             >
        <View style={styles.cardInt2}>        
                 <Text style={styles.btnTexto}>Axiales</Text>           
        </View> 
       </TouchableHighlight>      
    </View>

    <View style={styles.card}>
        <View style={styles.cardInt1}>
        <Image  style={styles.cardImg}   source={require('../../assets/terminales.png')}/> 
        </View>
         <TouchableHighlight
               onPress={botonSiguiente}
               style={{borderRadius: 20,}}                            
             >
        <View style={styles.cardInt2}>        
                 <Text style={styles.btnTexto}>Amortiguador</Text>           
        </View> 
       </TouchableHighlight>      
    </View>
    
    <View style={styles.card}>
        <View style={styles.cardInt1}>
        <Image  style={styles.cardImg}   source={require('../../assets/terminales.png')}/> 
        </View>
         <TouchableHighlight
               onPress={botonSiguiente}
               style={{borderRadius: 20,}}                            
             >
        <View style={styles.cardInt2}>        
                 <Text style={styles.btnTexto}>Axiales</Text>           
        </View> 
       </TouchableHighlight>      
    </View>
    
    <View style={styles.card}>
        <View style={styles.cardInt1}>
        <Image  style={styles.cardImg}   source={require('../../assets/terminales.png')}/> 
        </View>
         <TouchableHighlight
               onPress={botonSiguiente}
               style={{borderRadius: 20,}}                            
             >
        <View style={styles.cardInt2}>        
                 <Text style={styles.btnTexto}>Axiales</Text>           
        </View> 
       </TouchableHighlight>      
    </View>
    
    
       
</View>
   
  
    );
}


const styles = StyleSheet.create({
    contenedorSus:{
        backgroundColor:'#E7E7E7',
        flex:1
    },
    card:{
         backgroundColor: '#19D8E7',
       width: 360,     
       padding: 10,
       borderRadius: 20,       
       height:120,
       marginLeft:17,
       marginTop:35,
       borderWidth:2,
       borderColor:'yellow',
       elevation:60,
      justifyContent:'space-between',
      flexDirection:'row' 
    },
    cardInt1:{
        backgroundColor:'#fff',
        height:95,
        width:240,
        justifyContent:'center',
        borderRadius:20
    },
     cardInt2:{
        backgroundColor:'yellow',
        height:95,
        width:90,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    cardImg:{
        height:150,
        width:250,      
      
     },
    btnTexto:{
        fontSize:18,
        fontWeight:'bold'
    }



})

export default Suspension;