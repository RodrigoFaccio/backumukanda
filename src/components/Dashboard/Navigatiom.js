import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Camera from './Camera';

import Send from './Send';

import Card from './Card';

const Tab = createBottomTabNavigator();

export default function Navigatiom(){
   return (
     <Tab.Navigator>
       <Tab.Screen name="Camera" component={Camera}/>
       
     </Tab.Navigator>

   );
}