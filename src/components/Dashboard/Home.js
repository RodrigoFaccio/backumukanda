import React, {useEffect} from 'react';

import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import theme, {Box, Text} from '../theme';
import {Container, Content} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import styled from "styled-components";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {StackActions} from '@react-navigation/native';
import Perfil from './Perfil';
//import { FontAwesome5, FontAwesome, MaterialIcons, AntDesign,Ionicons,Feather,  } from "@expo/vector-icons";

import {
  Butterfly,
  Phone,
  Bills,
  Nigeria,
  Usa,
  Home,
  Transactions,
  More,
  Cards,
  Barcode,
} from '../../Icons';
import Animated from 'react-native-reanimated';
import {pattern} from '../../../assets/images';
import {SEGMENT, ICON_SIZE, PADDING} from '../../Constants';
import Tab from './Tab';
import {
  TapGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {socket, roomID, receiver} from '../../store/actions/transactionAction';
import {useDispatch, useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

const actions = [
  {
    title: 'Pedir dinheiro',
    icon: <Phone width={20} height={20} />,
    color: '#FDD1FF',
    cta: 'Request',
  },
  {
    title: 'Enviar dinheiro',
    icon: <Phone width={20} height={20} />,
    color: '#F9F9D6',
    cta: 'Send',
  },
  {
    title: 'Pagar contas',
    icon: <Phone width={20} height={20} />,
    color: '#DCF5FF',
    cta: 'Buy',
  },
  {
    title: 'toyota',
    icon: <Bills width={20} height={20} />,
    color: '#C6E1DD',
    cta: 'Pay',
  },
  {
    title: 'Binas',
    icon: <Bills width={20} height={20} />,
    color: '#C6E1DD',
    cta: 'Pay',
  },

  {
    title: 'Carros',
    icon: <Bills width={20} height={20} />,
    color: '#C6E1DD',
    cta: 'Pay',
  },
  
];

export const menus = [
  {text: 'Home', icon: <Home width={30} height={30} />, routeName: 'Home'},
  {text: 'Cards', icon: <Cards width={30} height={30} />, routeName: 'Card'},
  
  {
    text: 'Transactions',
    icon: <Barcode width={60} height={60} />,
    routeName: 'Transactions',
  },
   {
    text: 'Transactions',
    icon: <Transactions width={30} height={30} />,
    routeName: 'Transactions',
  },
  {text: 'More', icon: <More width={30} height={30} />, routeName: 'More'},
];

function Dashboard({navigation}) {
  const {navigate} = navigation;
  const dispatch = useDispatch();

  /* User */
  const {account_balance} = useSelector((state) => state.auth);
  const {user} = useSelector((state) => state.auth);

  const onSwitch = (routeNumber, routeName) => {
    const isCurrentRoute = routeNumber === 0 ? true : false;
    if (!isCurrentRoute) {
      navigate(routeName);
    }
  };

  const onCTA = (route) => {
    if (route === 'Send') navigate('Send');
    return;
  };

  useEffect(() => {
    socket.emit('joinService', {roomID});
    dispatch(receiver());
  }, []);

  return (
    <Box flex={1} paddingTop="xxl" backgroundColor="global" justifyContent="flex-end">
      <Perfil/>
      <Box height={height * 0.3} backgroundColor="global" paddingHorizontal="m">
        <Box
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
          paddingTop="m">
          <Ionicons name="person" size={28} color={theme.colors.white} />
          <Text
            variant="title1"
            color="darkGrey"
            fontSize={25}
            marginHorizontal="l">
            |
          </Text>
          <TouchableOpacity onPress={() => navigate('Notifications')}>
            <Ionicons
              name="notifications"
              size={25}
              color={theme.colors.white}
            />
          </TouchableOpacity>
        </Box>
        
        <Box
          backgroundColor="white"
          paddingHorizontal="m"
          paddingVertical="m"
          marginTop="s"
          borderRadius="m">
          <Box>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center">
              <Text variant="title1" color="black" fontSize={30}>
                {account_balance}.
                <Text fontSize={12} marginRight="m">
                  00 Kz
                </Text>
              </Text>

              <Text variant="title1" color="global" fontSize={30}>
               Ola! {user.name}
                <Text fontSize={20} marginRight="m">
                  
                </Text>
              </Text>
            
            </Box>
          </Box>
          <Funds>
            <TouchableOpacity onPress={() => navigate('AdMoney')} >
                
                <Retired>
                <FontAwesome5 name="plus" size={18} color="#964ff0" />
                
                <Text padding="r" center heavy color="global">
            Adicionar dinheiro 
            </Text>

            

            </Retired>
            
            </TouchableOpacity>

            <TouchableOpacity onPress={""}>
               
                <Addfunds>
                <FontAwesome5 name="arrow-down" size={18} color="#964ff0" />
               
                <Text size={24} padding="r"  center black heavy color="global">
            Levantar dinheiro
            </Text>
           
            
  
            </Addfunds>
            </TouchableOpacity>
            </Funds>
        </Box>

      </Box>
      <Container>
        <Content
          style={{paddingBottom: theme.spacing.xl}}
          showsVerticalScrollIndicator={false}>
          <Box flexDirection="row" flexWrap="wrap" justifyContent="center">
            {actions.map(({title, icon, color, cta}) => (
              <Box
                style={{backgroundColor: color}}
                padding="m"
                key={title}
                width={width / 2.3}
                height={120}
                margin="s"
                borderRadius="m">
                <TouchableOpacity onPress={() => onCTA(cta)}>
                  <Box
                    style={{borderRadius: 100}}
                    paddingVertical="m"
                    paddingHorizontal="s"
                    backgroundColor="white"
                    width={50}
                    justifyContent="center"
                    alignItems="center"
                    marginVertical="s">
                    {icon}
                  </Box>
                  <Text variant="title2" fontSize={13} fontWeight="700">
                    {title}
                  </Text>
                </TouchableOpacity>
              </Box>
            ))}
          </Box>
          <TapGestureHandler>
            <Box paddingHorizontal="m" marginBottom="l">
              <Box
                marginTop="l"
                backgroundColor="barter3"
                paddingVertical="l"
                borderRadius="m"
                height={150}
                justifyContent="center"
                alignItems="center"
                paddingHorizontal="l">
                <Entypo
                  name="circle-with-plus"
                  size={35}
                  color={theme.colors.barter}
                />
                <Text
                  variant="body"
                  textAlign="center"
                  paddingHorizontal="l"
                  marginTop="s">
                  Toque aqui para criar seu cartão Muiltcaixa agora
                </Text>
              </Box>
            </Box>
          </TapGestureHandler>

          <Box paddingHorizontal="m" marginBottom="xl">
            <ImageBackground
              source={pattern}
              style={{height: 180, width: '100%'}}>
              <Box
                justifyContent="center"
                alignItems="center"
                paddingLeft="l"
                paddingRight="xl"
                paddingTop="xl"
                borderRadius="l">
                <Text variant="title2" color="white" fontWeight="700">
                 

                  Envie um vale-presente resgatável para a família & amigos em qualquer lugar de
                  o mundo
                </Text>
              </Box>
            </ImageBackground>
          </Box>
        </Content>
      </Container>

      {/* Tab applicaiton */}
      
      
                
      
      
         

      {/* Switch Currency */}
      <Animated.View
        style={{
          height: 150,
          width,
          position: 'absolute',
          bottom: -200,
          left: 0,
          backgroundColor: 'white',
        }}>
        <Box marginHorizontal="l" paddingTop="m">
          <Text variant="title2" fontSize={18}>
            Select Balance
          </Text>
        </Box>
        <Box paddingHorizontal="xl" paddingTop="m">
          <Box flexDirection="row" alignItems="center" marginBottom="s">
            <Nigeria width={20} height={20} />
            <Text variant="body" marginLeft="l" fontWeight="400">
              NGN Balance
            </Text>
          </Box>
          <Box flexDirection="row" alignItems="center">
            <Usa width={20} height={20} />
            <Text variant="body" marginLeft="l" fontWeight="400">
              USD Balance
            </Text>
          </Box>
        </Box>
      </Animated.View>
    </Box>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D336E',
    justifyContent: 'flex-end',
  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primaryLight,
  },
  tab: {
    width: 70,
    height: ICON_SIZE + PADDING * 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Dashboard;

const Funds = styled.View`
flex-direction: row;
align-items: center;
margin: 32px 1px;

justify-content: space-between;

`;

const Retired = styled.View`


width: 150px;
height: 50px;
justify-content: center;
flex-direction: row;
align-items: center;
border-radius: 15px;


background-color: #EEE2FC;


`;


const Addfunds = styled.View`

flex-direction: row;
align-items: center;
width: 150px;
height: 50px;
background-color: #EEE2FC;
justify-content: center;
border-radius: 15px;






`;
