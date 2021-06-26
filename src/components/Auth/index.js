import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Onboarding from './Onboarding/Onboarding';
import Login from './Login';
import Signup from './Signup';
import {Text} from '../theme';
import Password from './Password';

const AutheticationStack = createStackNavigator();
export const AuthenticationNavigator = () => (
  <AutheticationStack.Navigator initialRouteName="OnBoarding">
    <AutheticationStack.Screen
      name="OnBoarding"
      component={Onboarding}
      options={{headerShown: false}}
    />

    <AutheticationStack.Screen
      name="Login"
      component={Login}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Qual é o seu email?
          </Text>
        ),
      }}
    />

    <AutheticationStack.Screen
      name="Register"
      component={Signup}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Crie a sua conta aqui
          </Text>
        ),
      }}
    />

    <AutheticationStack.Screen
      name="Password"
      component={Password}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            insira uma senha
          </Text>
        ),
      }}
    />
  </AutheticationStack.Navigator>
);
