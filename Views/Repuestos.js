import React, {useState, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Animated,
  FlatList,
  StatusBar,
  ImageBackground,
  Pressable,
  Button
} from 'react-native';


import * as Animatable from 'react-native-animatable';
import Carousel from 'react-native-snap-carousel';
import Botton from '../Components/Botton'


const Repuestos = ({navigation}) => {

     const botonCat1 = () => {
        navigation.navigate('Suspension')     
    }
 
     const botonCat2 = () => {
        navigation.navigate('Home')     
    }
  

  const TipoRepuestos = [
    {
      
      Tipo:"Suspensión",     
      TipoImg:require('../assets/suspension.png'), 
                
    },
    {         
      Tipo:"Dirección",     
      TipoImg:require('../assets/direccion.png'),      
    },
    {
     Tipo:"Transmisión",     
      TipoImg:require('../assets/transmision.png'), 
    },
    {
     Tipo:"Llantas y Rines",     
      TipoImg:require('../assets/llantas.png'), 
     
    },
    
  ];

   

  const {width, height} = Dimensions.get('window');
  const carouselRef = useRef(null);

  const RenderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback >
        <View >
          <Pressable
           onPress={botonCat1}
          >
          
          <ImageBackground            
            style={{
              backgroundColor: '#19D8E7',
              width: 360,
              height: 120,
              borderRadius: 10,
              flexDirection: 'row',
              elevation:8,
              marginBottom:30,
               borderWidth:2,
             borderColor:'white',    
            }
        
        }
           >
            <View style={{paddingLeft:20, paddingTop:9}}>             
              <Image
                style={{height: 100, width: 150,   resizeMode: "contain"}}
                source={item.TipoImg}
              />             
            </View>
            <View style={{ paddingTop:40}}>
              <Text
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 25,                
                }}>
                {item.Tipo}
              </Text>              
            </View>                 
          </ImageBackground>
          </Pressable>
        </View>
      </TouchableWithoutFeedback>

        


      
    );
  };

  // SLIDING PANEL

  const [dragRange, setDragRange] = useState({
    top: height - 40,
    bottom: 10,
  });

  const _draggedValue = new Animated.Value(250);

  const ModalRef = useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E7E7E7" barStyle="light-content" />     
      <View style={{paddingHorizontal: 14}}>
        <View style={{flexDirection: 'row'}}>         
         <View style={styles.containerSaludo}>           
             <View >
             <Text style={styles.textoPerfil}>Mi!!! </Text>
             <Text style={{fontSize:20, fontWeight:'600' }}>Ford Escape XLT 3.0 </Text>
             </View>                    
              <Image style={styles.imgPerfil}  source={require('../assets/perfil.jpg')}/>           
         </View>          
        </View>
         <View style={styles.containerCard}>
            <View style={{paddingLeft:20}}  >           
              <Animatable.Image
                 duration={4000}
                 resizeMode={"stretch"}   
                 animation={'fadeIn'} 
                source={require("../assets/fordEscape.png")}
                style={styles.imgPromociones}
             >              
             </Animatable.Image> 
            </View >
            <View style={{paddingTop:20, paddingRight:20}}>
              <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Caracteristicas</Text>
              <Text style={{fontSize:13,  color:'white', paddingTop:5}}>Motor	V6, 24 Válvulas</Text>
              <Text style={{fontSize:13,  color:'white'}}>Cilindrada	3.000 c.c.</Text>
              <Text style={{fontSize:13,  color:'white'}}>Potencia	240 HP/6.550 rpm</Text>
              <Text style={{fontSize:13,  color:'white'}}>Llantas 215/70 R16"</Text>
            </View>          
        </View>  

        

        <View >
          <View ><Text style={styles.catText}>Categorias</Text></View>
          <Carousel
            layout={'tinder'}
            ref={carouselRef}
            data={TipoRepuestos}           
            renderItem={RenderItem}
            sliderWidth={width}
            itemWidth={width }
            swipeThreshold={100}
            layoutCardOffset={-12}
            inactiveSlideOpacity={0.3}
            containerCustomStyle={{
              overflow: 'visible',
              marginVertical: 5,           
            }}          
          />
        </View>  
      </View>
         <View style={styles.containerCard2}>
            <Botton 
           onPress={botonCat2}      
           />             
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7E7E7',   
  }, 

  containerCard: {      
       width: 360,       
       borderRadius: 10,   
       height:200,       
       marginTop:30,
       backgroundColor:'#ff6961',
       justifyContent: 'space-around',
      flexDirection: 'row',
      elevation:50,
       borderWidth:2,
       borderColor:'white',
    },  
    imgPromociones:{
        height:150,
        width:150,
        marginLeft:0,                    
    },
    containerSaludo:{
       justifyContent:'space-between',
       flexDirection: 'row',
       marginTop:20,
    },
    textoPerfil:{
        fontSize:25,
        fontWeight: 'bold',
        paddingLeft:2,
        paddingTop:10
    },
    textoPerfil2:{
        fontSize:18,
        paddingLeft:2,        

    },    
    imgPerfil:{
         height:50,
        width:50,
        marginLeft:105,
        borderRadius:90,
        resizeMode: "contain", 
        marginTop: 10

    }, 
    catText:{
        fontWeight:'bold',
        paddingTop:20,
        fontSize:25,
            },
    containerCard2: {
       backgroundColor: '#ffffec',
       width: 380,     
       padding: 10,
       borderRadius: 10,    
       height:60,
       marginLeft:7,
       marginTop:130,
       elevation:20,
       shadowColor:'black'
         
        
    },
   
});

export default Repuestos;