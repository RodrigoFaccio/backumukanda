import React, {useRef, Fragment, useEffect} from 'react';
import {Box, Text} from '../../theme';
import {Dimensions} from 'react-native';
import {Butterfly} from '../../../Icons';
import {useScrollHandler} from 'react-native-redash';
import Animated, {divide} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {StackActions} from '@react-navigation/native';

/* Components */
import Slide from './Slide';
import Dot from './Dot';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    title: 'Pagamentos rápidos e seguros',
    body:
      'Pagar. Ser pago. Comprar. Compartilhar. Junte-se a mais de 60 milhões de pessoas que usam o aplicativo OmukandaPay.',
  },
  {
    title: 'Pagar amigos',
    body:
      'Envie e receba dinheiro com amigos Venmo e expresse-se em cada nota de pagamento.',
  },

  {
    title: 'Divida as necessidades',
    body:
      "Serviços públicos, aluguel, mantimentos - quando você divide as contas básicas, todos pagam facilmente",
  },
  {
    title: 'Divida a diversão',
    body: 'Combine com amigos Venmo qualquer atividade compartilhada, de viagens a piqueniques e comida para viagem.',
  },
];

function Onboarding({navigation}) {
  const {navigate} = navigation;
  const {isAuthenticated} = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigation.dispatch(StackActions.replace('Dashboard'));
    }
  }, [isAuthenticated]);

  const scroll = useRef(null);
  const {scrollHandler, x} = useScrollHandler();

  const onLogin = () => {
    navigate('Login');
  };

  const onRegister = () => {
    navigate('Register');
  };

  return (
    <Box flex={1}   backgroundColor="global">
      <Box height={height * 0.65}>
        <Box
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          paddingTop="m">
          
          <Text
            variant="title1"
            backgroundColor="white"
            color="white"
            fontSize={30}
            fontWeight="bold"
            textDecorationStyle="solid"
            style={{marginLeft: 7, marginTop: 28}}>
            OmukandaPay
          </Text>
        </Box>

        <Animated.ScrollView
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          color="white"
          bounces={false}
          {...scrollHandler}>
          {slides.map(({title, body}, index) => (
            <Fragment  key={index}>
              <Slide  {...{title, body}} />
            </Fragment>
          ))}
        </Animated.ScrollView>
      </Box>
      <Box
        height={height * 0.08}
        flexDirection="row"
        justifyContent="center"
        alignItems="center">
        {slides.map((_, index) => (
          <Dot key={index} {...{index}} currentIndex={divide(x, width)} />
        ))}
      </Box>
      <Box justifyContent="center" alignItems="center" paddingVertical="m">
        <TouchableOpacity onPress={onRegister}>
          <Box
            width={width * 0.8}
            backgroundColor="white"
            paddingVertical="m"
            borderRadius="xl"
            marginBottom="s">
            <Text color="black" textAlign="center" variant="title1" fontSize={18}>
              Criar minha conta
            </Text>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={onLogin}>
          <Box
            width={width * 0.8}
            borderColor= "white"
           
            borderWidth={1}
            paddingVertical="m"
            borderRadius="xl">
            <Text
              color="barter"
              textAlign="center"
              variant="title1"
              fontSize={18}>
              Já tenho conta
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </Box>
  );
}

export default Onboarding;
