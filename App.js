import React, {useEffect} from 'react';

import 'react-native-gesture-handler';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/components';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthenticationNavigator} from './src/components/Auth';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {DashboardNavigator} from './src/components/Dashboard';
import {useDispatch} from 'react-redux';
import {loadUser} from './src/store/actions/authActions';
import Navigatiom from './src/components/Dashboard/Navigatiom';

const AppStack = createStackNavigator();


const initialState = {
  action: "openProfile"
}

const reducer = (state = intelialSate, action) => {
  if (action.type == "CLOSE_PERFIL"){
    return {action: "clossePerfl"};
  }
  return state;
};

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <ThemeProvider {...{theme}}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppStack.Navigator
            headerMode="none"
            initialRouteName="Authentication">
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name="Dashboard" component={DashboardNavigator} />
          </AppStack.Navigator>
        </SafeAreaProvider>
        
      </NavigationContainer>
      
    </ThemeProvider>
  );
}
