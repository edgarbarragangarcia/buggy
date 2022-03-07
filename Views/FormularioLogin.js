import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  StatusBar,
  Pressable,
  TouchableHighlight,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-gesture-handler';

const FormularioLogin = ({navigation}) => {
  const [inputTexto, guardarInputTexto] = useState('');
  const guardarDatos = async () => {
    try {
      await AsyncStorage.setItem('nombre', inputTexto);
    } catch (error) {
      console.log(error);
    }
  };

  const botonSiguiente = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.contenedor}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          duration={3000}
          source={require('../assets/chat.png')}
          style={{width: 90, height: 90}}
          resizeMode={'stretch'}
          animation={'bounceIn'}
        />
      </View>

      <Animatable.View style={styles.footer} animation={'fadeInUpBig'}>
        <Text style={styles.saludo}>Bienvenido!</Text>
        <Text style={styles.nombre}>Nombre:</Text>
        <TextInput
          placeholder="Nombre"
          style={styles.textInput}
          autoCapitalize="none"
          onChangeText={texto => guardarInputTexto(texto)}
        />
        <Text style={styles.apellido}>Apellidos:</Text>
        <TextInput
          placeholder="Apellido"
          style={styles.textInput}
          autoCapitalize="none"
        />
        <View style={styles.boton}>
          <TouchableHighlight onPress={guardarDatos} style={styles.btnGuardar}>
            <Text style={styles.btnTexto}>Guardar</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.boton}>
          <TouchableHighlight
            onPress={botonSiguiente}
            style={styles.btnSiguiente}>
            <Text style={styles.btnTexto}>Login</Text>
          </TouchableHighlight>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    allingItems: 'center',
    paddingHorizontal: 90,
  },
  footer: {
    flex: 3,
    backgroundColor: '#19D8E7',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  nombre: {
    color: '#E7E7E7',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textInput: {
    borderColor: '#FFF',
    borderBottomWidth: 1,
    width: 300,
    height: 40,
  },
  saludo: {
    color: '#E7E7E7',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
    paddingBottom: 10,
  },
  apellido: {
    color: '#E7E7E7',
    paddingTop: 40,
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnSiguiente: {
    backgroundColor: '#fdfd96',
    padding: 10,
    marginTop: 50,
    marginLeft: 0,
    borderRadius: 10,
    width: 250,
    height: 40,
  },

  btnGuardar: {
    backgroundColor: '#fdfd96',
    padding: 10,
    marginTop: 50,
    marginLeft: 0,
    borderRadius: 10,
    width: 100,
    height: 40,
  },

  btnTexto: {
    textAlign: 'center',
    color: '#9c9c9c',
    marginRight: 0,
    fontSize: 15,
    fontWeight: 'bold',
  },

  boton: {
    alignItems: 'center',
  },
});

export default FormularioLogin;
