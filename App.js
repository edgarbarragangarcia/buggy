
import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './Views/Inicio'
import FormularioLogin from './Views/FormularioLogin'
import Home from './Views/Home'
import Suspension from './Views/Repuestos/Suspension'
import Botton from './Components/Botton'

import Repuestos from './Views/Repuestos';
import { Colors } from 'react-native/Libraries/NewAppScreen';







const Stack = createStackNavigator();

const App= () =>  {  

  return (

    <NavigationContainer>
      <Stack.Navigator
       initialRouteName='Inicio'
       
       screenOptions={{        
        
         
       }}
      >
        <Stack.Screen
         options={{ headerShown: false, }}
             name='Inicio'
             component={Inicio}
        />
        <Stack.Screen
        options={{ headerShown: false, }}
             name='FormularioLogin'
             component={FormularioLogin}
        />
         <Stack.Screen
        options={{ headerShown: false, }}
             name='Home'
             component={Home}
        />    

         <Stack.Screen
        options={{ headerShown: false, 
          headerTintColor:'#fff', 
          title:'Atras', 
         }}
             name='Repuestos'
             component={Repuestos}
        />

          <Stack.Screen
        options={{ headerShown: true, 
          headerTintColor:'black', 
          title:'Atras', cardOverlayEnabled:true
         }}
             name='Suspension'
             component={Suspension}
        />

        
          <Stack.Screen
        options={{ headerShown: true, 
          headerTintColor:'#fff', 
          title:'Atras', cardOverlayEnabled:true
         }}
             name='Botton'
             component={Botton}
        />

      

      

       

      </Stack.Navigator>

  

    </NavigationContainer>

    
  );
};



export default App;
