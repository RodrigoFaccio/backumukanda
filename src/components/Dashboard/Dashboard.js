import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';

import PayButton from '../PayButton';

import Camera from './Camera';

import Home from './Home';

import Card from './Card';

import Transactions from './Transactions';

const Tab = createBottomTabNavigator();

const icons = {
  Home:{
    lib: AntDesign,
    name:'home',
  },
  Card:{
    lib: AntDesign,
    name:'creditcard',
    color: '#FDD1FF',
  },
 
  Hola:{
    lib: AntDesign,
    name:'dribbble',
  },
  Doce:{
    lib: AntDesign,
    name:'shoppingcart',
  },

};

export default function Navigatiom(){
   return (
     <Tab.Navigator
       screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, size})  => {
          if (route.name === 'Camera')  {
            return (
            <PayButton
            onPress={()=> navigation.navigate('Camera')}/>
            );
          }

          const { lib: Icon, name, } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
         },

       })}
       tabBarOptions={{
        style: {
          
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: '#111',
        inactiveTintColor: '#92929c',
       }}
     >
       <Tab.Screen 
       name="Home" 
       component={Home}
       options={{
         title: 'Inicio',
       }}
  />
      <Tab.Screen 
      name="Card" 
       component={Card}
       options={{
         title: 'Cartões',
       }}
  />

<Tab.Screen 
name="Camera" 
       component={Camera}
       options={{
         title: '',
       }}
/>

<Tab.Screen 
name="Hola" 
       component={Card}
       options={{
         title: 'Apostas',
         color: 'red',
       }}
/>

<Tab.Screen 
name="Doce" 
       component={Transactions}
       options={{
         title: 'Loja',
       }}
/>


       
       
     </Tab.Navigator>

   );
}