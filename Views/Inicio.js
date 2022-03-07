import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  StatusBar,
  Pressable,
} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Inicio = ({navigation}) => {
  const botonSiguiente = () => {
    navigation.navigate('FormularioLogin');
  };

  return (
    <View style={styles.contenedor}>
      <StatusBar backgroundColor="#E7E7E7" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          duration={3000}
          source={require('../assets/chat.png')}
          style={styles.logo}
          resizeMode={'stretch'}
          animation={'fadeInUpBig'}
        />
      </View>

      <Animatable.View style={styles.footer} animation={'fadeInUpBig'}>
        <Text style={styles.titulo}>
          El mejor lugar para comprar lo que tu carro necesita!
        </Text>

        <View style={styles.boton}>
          <Pressable onPress={botonSiguiente} style={styles.btnSiguiente}>
            <Text style={styles.btnTexto}>Unete Ya!!</Text>
          </Pressable>
        </View>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#E7E7E7',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    allingItems: 'center',
    paddingHorizontal: 90,
  },
  footer: {
    flex: 1,
    backgroundColor: '#19D8E7',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },

  titulo: {
    color: '#E7E7E7',
    fontWeight: 'bold',
    fontSize: 30,
  },
  texto: {
    color: '#E7E7E7',
    marginTop: 7,
    fontSize: 20,
  },
  btnSiguiente: {
    backgroundColor: '#fdfd96',
    padding: 10,
    marginTop: 20,
    marginLeft: 100,
    borderRadius: 10,
    width: 200,
  },

  btnTexto: {
    textAlign: 'center',
    color: '#9c9c9c',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default Inicio;
