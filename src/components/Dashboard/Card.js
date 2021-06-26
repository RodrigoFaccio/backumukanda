import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from '../theme';
import {SEGMENT, ICON_SIZE, PADDING} from '../../Constants';
import theme from '../theme';
import {menus} from './Home';
import Tab from './Tab';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
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
    width: SEGMENT,
    height: ICON_SIZE + PADDING * 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function Card({navigation}) {
  const {navigate} = navigation;

  const onSwitch = (routeNumber, routeName) => {
    const isCurrentRoute = routeNumber === 1 ? true : false;
    if (!isCurrentRoute) {
      navigate(routeName);
    }
  };

  return (
    <Box justifyContent="flex-end" flex={1}>
      <Box flex={1} paddingHorizontal="m" paddingVertical="m">
        <Box
          justifyContent="space-between"
          alignItems="center"
          flexDirection="row">
          <Box></Box>

          <TouchableOpacity>
            <Box
              width={120}
              borderRadius="s"
              backgroundColor="primaryLight"
              justifyContent="center"
              alignItems="center"
              paddingVertical="s">
              <Text variant="body">Novo Cartão</Text>
            </Box>
          </TouchableOpacity>
        </Box>

        <Box marginTop="xl">
          <Box
            backgroundColor="global"
            borderRadius="l"
            height={220}
            paddingVertical="l">
            <Box
              flexDirection="row"
              justifyContent="space-between"
              paddingRight="l"
              alignItems="center">
              <Box
                backgroundColor="barter4"
                borderTopRightRadius="l"
                borderBottomRightRadius="l"
                paddingLeft="m"
                paddingRight="m"
                paddingVertical="s">
                <Text variant="body" color="white" fontWeight="400">
                 Omukanda 
                </Text>
              </Box>
              <Box>
                <Text variant="title2" color="white">
                  15.600.00 kz
                </Text>
              </Box>
            </Box>
            <Box marginTop="m" paddingHorizontal="l">
              <Text variant="body" color="white" fontSize={12}>
                Yuri António
              </Text>
              <Text variant="body" fontSize={25} marginTop="s" color="white">
                4137 74332 9999 1234
              </Text>
            </Box>

            <Box
              justifyContent="space-between"
              flexDirection="row"
              paddingHorizontal="l"
              marginTop="m"
              alignItems="center">
              <Box flexDirection="row" alignItems="center">
                <Box marginRight="s">
                  <Text
                    variant="body"
                    fontSize={9}
                    lineHeight={10}
                    color="white">
                    Valido {'\n'} 
                  </Text>
                </Box>
                <Box>
                  <Text color="white" variant="body">
                    01/24
                  </Text>
                </Box>
              </Box>

              <Box>
                <Text
                  variant="title1"
                  fontSize={25}
                  color="white"
                  textTransform="uppercase">
                  Muiltcaixa
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>



        <Box marginTop="xl">
          <Box
            backgroundColor="black"
            borderRadius="l"
            height={220}
            paddingVertical="l">
            <Box
              flexDirection="row"
              justifyContent="space-between"
              paddingRight="l"
              alignItems="center">
              <Box
                backgroundColor="barter"
                borderTopRightRadius="l"
                borderBottomRightRadius="l"
                paddingLeft="m"
                paddingRight="m"
                paddingVertical="s">
                <Text variant="body" color="white" fontWeight="400">
                 Banco Bai 
                </Text>
              </Box>
              <Box>
                <Text variant="title2" color="white">
                  15.600.00 kz
                </Text>
              </Box>
            </Box>
            <Box marginTop="m" paddingHorizontal="l">
              <Text variant="body" color="white" fontSize={12}>
                Yuri António
              </Text>
              <Text variant="body" fontSize={25} marginTop="s" color="white">
                4137 74332 9999 1234
              </Text>
            </Box>

            <Box
              justifyContent="space-between"
              flexDirection="row"
              paddingHorizontal="l"
              marginTop="m"
              alignItems="center">
              <Box flexDirection="row" alignItems="center">
                <Box marginRight="s">
                  <Text
                    variant="body"
                    fontSize={9}
                    lineHeight={10}
                    color="white">
                    Valido {'\n'} 
                  </Text>
                </Box>
                <Box>
                  <Text color="white" variant="body">
                    01/24
                  </Text>
                </Box>
              </Box>

              <Box>
                <Text
                  variant="title1"
                  fontSize={25}
                  color="white"
                  textTransform="uppercase">
                  Visa
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>


      </Box>

      {/* Tab Navigation */}
 
    </Box>
  );
}

export default Card;
