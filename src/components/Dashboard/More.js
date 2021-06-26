import React from 'react';
import {Box, Text} from '../theme';
import {menus, styles} from './Dashboard';
import Tab from './Tab';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

function More({navigation}) {
  const {navigate} = navigation;
  const {user} = useSelector((state) => state.auth);

  const onSwitch = (routeNumber, routeName) => {
    const isCurrentRoute = routeNumber === 3 ? true : false;
    if (!isCurrentRoute) {
      navigate(routeName);
    }
  };

  return (
    <Box flex={1} backgroundColor="white" justifyContent="flex-end">
      <Box flex={1} padding="m">
       

        <Text
          marginTop="m"
          fontWeight="600"
          variant="title2"
          fontSize={25}
          marginBottom="m">
          Receber dinheiro
        </Text>

        <Box
          backgroundColor="barter3"
          paddingVertical="m"
          paddingHorizontal="m"
          borderRadius="m">
          <Box flexDirection="row" alignItems="center">
            <Text color="black" variant="body">
            Número de sua carteira
            </Text>
            <Text
              variant="title1"
              color="black"
              fontSize={18}
              marginLeft="s"
              fontWeight="700">
              {user.account_number}
              
            </Text>
          </Box>

        
        </Box>

        <Box paddingVertical="l">
          <TouchableOpacity>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              borderBottomWidth={1}
              paddingHorizontal="m"
              paddingBottom="m"
              borderBottomColor="primaryLight">
              <Box>
                <Text variant="title2" fontSize={17}>
                Convide amigos
                </Text>
                <Text variant="body" fontSize={14}>
                Seja pago por cada amigo que se inscrever e usar a OmukandaPay
                </Text>
              </Box>
            </Box>
          </TouchableOpacity>

          <Box flexdirection="column" marginTop="m" paddingHorizontal="m">
            <Text
              variant="title1"
              color="black"
              fontSize={20}
              fontWeight="bold">
             Faça um pagamento
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("Camera")} delayPressIn={0}>
              <Box
                marginTop="m"
                flexDirection="row"
                justifyContent="space-between"
                marginTop="s"
                borderBottomWidth={1}
                borderBottomColor="primaryLight"
                paddingBottom="m">
                <Box>
                  <Text variant="title2" fontSize={17}>
                  Pagar com código QR
                  </Text>
                  <Text variant="body" fontSize={14}>
                  Efetue pagamentos com Visa QR.
                  </Text>
                </Box>
              </Box>
            </TouchableOpacity>
          </Box>

          <Box flexdirection="column" marginTop="l" paddingHorizontal="m">
            <Text
              variant="title1"
              color="black"
              fontSize={20}
              fontWeight="bold">
              Send Money
            </Text>
            <TouchableOpacity>
              <Box
                flexDirection="row"
                justifyContent="space-between"
                marginTop="s">
                <Box>
                  <Text variant="title2" fontSize={17}>
                  Enviar dinheiro
                  </Text>
                  <Text variant="body" fontSize={14}>
                  Envie dinheiro para seus amigos no WhatsApp
                  </Text>
                </Box>
              </Box>
            </TouchableOpacity>
          </Box>

          <TouchableOpacity>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginTop="m"
              paddingHorizontal="m">
              <Box>
                <Text variant="title2" fontSize={17}>
                Contate o suporte
                </Text>
              </Box>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>

      {/* Tab Navigation */}
      <Box height={70} backgroundColor="danger">
        <Box style={{...styles.tabs}}>
          {menus.map(({icon, text, routeName}, index) => (
            <Box {...{index}} style={{...styles.tab}} key={index}>
              <Tab
                onPress={(index, route) => onSwitch(index, route)}
                {...{index, text, routeName}}>
                {icon}
              </Tab>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default More;
