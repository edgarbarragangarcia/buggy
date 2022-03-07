import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextComponent,
  View,
  Pressable,
  Image,
  StatusBar,
  Animated,
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Botton from '../Components/Botton';
import Login from './FormularioLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {


  const [image, setImage] = useState('https://via.placeholder.com/75');
  
  const abrirCamara =()=>{
    const options = {
      title: 'Tomar una imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
      includeBase64: true
    }

    launchCamera(options, response => {
      if (response.errorCode) {
        console.log(response.errorMessage);
      } else if (response.didCancel) {
        console.log(response.didCancel);
      } else {
        const path = response.assets[0].uri;
        setImage(path);
      }
    })
  }

  const [nombreUsuario, guardarNombreUsuario] = useState('');

  useEffect(() => {
    obtenerDatosUsuario();
  }, []);

  const obtenerDatosUsuario = async () => {
    try {
      const nombre = await AsyncStorage.getItem('nombre');
      guardarNombreUsuario(nombre);
    } catch (error) {
      console.log(error);
    }
  };

  const botonCat1 = () => {
    navigation.navigate('Inicio');
  };

  const botonCat4 = () => {
    navigation.navigate('Repuestos');
  };

  const [animacion] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(animacion, {
        toValue: 360,
        duration: 2000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  const insterpolacion = animacion.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const estiloAnimacion = {
    transform: [{rotate: insterpolacion}],
  };

  return (
    <View style={styles.containerHome}>
      <StatusBar backgroundColor="#E7E7E7" barStyle="light-content" />

      <View style={styles.containerSaludo}>
        <View>
          <Text style={styles.textoPerfil}> Hola {nombreUsuario} </Text>
          <Text style={styles.textoPerfil2}>Buenos días </Text>
        </View>

        <View>
          <Pressable
            onPress={() => {
              abrirCamara();
            }}>
            <Image source={{uri: image}} style={styles.imgPerfil} />
          </Pressable>
          <Text style={{paddingLeft: 13, fontSize: 12, color: 'blue'}}>
            Foto
          </Text>
        </View>
      </View>

      <View style={styles.containerCard}>
        <View>
          <Text style={styles.textCard}>
            {nombreUsuario}, tienes hoy una promoción
          </Text>
        </View>
        <View style={styles.imgContenedor}>
          <TouchableOpacity style={styles.btnPromociones}>
            <Text style={styles.btnTextoPromociones}>Descubrela...</Text>
          </TouchableOpacity>
          <Animatable.Image
            resizeMode={'stretch'}
            source={require('../assets/llantas2.png')}
            style={[styles.imgPromociones, estiloAnimacion]}></Animatable.Image>
        </View>
      </View>

      <View>
        <View style={styles.contaCategoria}>
          <Text style={styles.containerCategoria}>Categorias</Text>
        </View>
        <View style={styles.subCategoria}>
          <View>
            <Pressable onPress={botonCat1}>
              <Image
                style={styles.imgSubCat}
                source={require('../assets/baul.png')}
              />
            </Pressable>
            <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: 8}}>
              El Baúl
            </Text>
          </View>
          <View>
            <Pressable>
              <Image
                style={styles.imgSubCat}
                source={require('../assets/herramientas.png')}
              />
            </Pressable>
            <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: 15}}>
              Taller
            </Text>
          </View>
          <View>
            <Pressable>
              <Image
                style={styles.imgSubCat}
                source={require('../assets/limpieza.png')}
              />
            </Pressable>
            <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: 4}}>
              Limpieza
            </Text>
          </View>
          <View>
            <Pressable onPress={botonCat4}>
              <Image
                style={styles.imgSubCat}
                source={require('../assets/repuesto.png')}
              />
            </Pressable>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>Repuestos</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.subCategoria2}>
          <View>
            <Pressable onPress={botonCat1}>
              <Image
                style={styles.imgSubCat2}
                source={require('../assets/seguros.png')}
              />
            </Pressable>
            <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: 28}}>
              Seguro
            </Text>
          </View>
          <View style={styles.botonCat1}>
            <Pressable>
              <Image
                style={styles.imgSubCat2}
                source={require('../assets/asistencia.png')}
              />
            </Pressable>
            <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: 17}}>
              Asistencia
            </Text>
          </View>
          <View style={styles.botonCat1}>
            <Pressable>
              <Image
                style={styles.imgSubCat2}
                source={require('../assets/asistencia.png')}
              />
            </Pressable>
            <Text style={{fontSize: 15, fontWeight: 'bold', paddingLeft: 17}}>
              Accesorios
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            paddingLeft: 28,
            paddingTop: 7,
          }}>
          Noticias
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#19D8E7',
          width: 360,
          padding: 10,
          borderRadius: 10,
          height: 120,
          marginLeft: 17,
          marginTop: 15,
          borderWidth: 2,
          borderColor: 'white',
          elevation: 20,
          flexDirection: 'column',
        }}>
        <View>
          <Animatable.Image
            duration={7000}
            resizeMode={'stretch'}
            animation={'fadeIn'}
            source={require('../assets/revista.jpeg')}
            style={{
              height: 100,
              width: 100,
              paddingRight: 0,
              borderRadius: 5,
            }}></Animatable.Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHome: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  containerCard: {
    backgroundColor: '#19D8E7',
    width: 360,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    height: 120,
    marginLeft: 17,
    marginTop: 35,
    borderWidth: 2,
    borderColor: 'yellow',
    elevation: 60,
  },
  textCard: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 10,
  },
  btnPromociones: {
    backgroundColor: '#fdfd96',
    width: 120,
    borderRadius: 30,
    marginTop: 15,
  },
  btnTextoPromociones: {
    color: '#9c9c9c',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  imgPromociones: {
    height: 60,
    width: 60,
    marginLeft: 130,
  },
  imgContenedor: {
    marginRight: 0,
    flexDirection: 'row',
  },
  containerSaludo: {
    alignItems: 'flex-start',
  },
  imgPerfil: {
    height: 60,
    width: 60,
    marginRight: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'yellow',
    marginTop: 15,
  },
  containerSaludo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textoPerfil: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 25,
    paddingTop: 10,
  },
  textoPerfil2: {
    fontSize: 18,
    paddingLeft: 30,
  },
  containerCategoria: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 28,
    paddingTop: 20,
  },
  subCategoria: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingTop: 25,
  },
  subCategoria2: {
    flexDirection: 'row',
    resizeMode: 'contain',
    paddingLeft: 12,
    paddingTop: 25,
    justifyContent: 'center',
  },
  imgSubCat: {
    height: 70,
    width: 70,
    marginRight: 30,
    borderRadius: 10,
    borderWidth: 2.5,
    borderColor: 'green',
    backgroundColor: '#77dd77',
  },
  imgSubCat2: {
    height: 70,
    width: 70,
    marginRight: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: '#ff6961',
    marginLeft: 20,
  },
});

export default Home;
