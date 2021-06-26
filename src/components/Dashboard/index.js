import * as React from 'react';
import Dashboard from './Dashboard';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, Box} from '../../components/theme';

/* Componets */
import Card from './Card';
import Transactions from './Transactions';
import More from './More';
import Send from './Send';
import SendMoney from './SendMoney';
import Notifications from './Notifications';
import AdMoney from './AdMoney';
import Camera from './Camera';
import ItemDetail from './ItemDetail';

const DashBoardStack = createStackNavigator();

export const DashboardNavigator = () => (
  <DashBoardStack.Navigator initialRouteName="Home">
    <DashBoardStack.Screen
      name="Home"
      options={{headerShown: false}}
      component={Dashboard}
    />
    <DashBoardStack.Screen name="Card" component={Card} />
    <DashBoardStack.Screen name="Transactions" component={Transactions} />
    <DashBoardStack.Screen name="More" component={More} />
    <DashBoardStack.Screen
      name="Send"
      component={Send}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Enviar dinheiro
          </Text>
        ),
      }}
    />

    <DashBoardStack.Screen
      name="SendMoney"
      component={SendMoney}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Enviar Dinheiro
          </Text>
        ),
      }}
    />

    <DashBoardStack.Screen
      name="Notifications"
      component={Notifications}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Notifições
          </Text>
        ),
      }}
    />


<DashBoardStack.Screen
      name="AdMoney"
      component={AdMoney}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Adicinar Dinheiro
          </Text>
        ),
      }}
    />

<DashBoardStack.Screen
      name="Camera"
      component={Camera}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Pagar Serviço
          </Text>
        ),
      }}
    />


    
<DashBoardStack.Screen
      name="ItemDetail"
      component={ItemDetail}
      options={{
        headerTitle: () => (
          <Text variant="title1" color="black" fontSize={20}>
            Pagar Serviço
          </Text>
        ),
      }}
    />





  </DashBoardStack.Navigator>
);
