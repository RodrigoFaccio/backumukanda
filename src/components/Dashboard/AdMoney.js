import React from 'react';
import { ImageExpress } from './styles';
import {Box, Text} from '../theme';
import {menus, styles} from './Home';
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
          Adicionar dinheiro ao OmukandaPay
        </Text>

        <Box
          backgroundColor="global"
          paddingVertical="m"
          paddingHorizontal="m"
          borderRadius="m">
          <Box flexDirection="row" alignItems="center">
           

            
          </Box>

          <Text color="white" variant="body">
            Vá até a um multicaixa ou Seviço Bancario  ou internet escolha pagamentos por Referencias
            introduza o codigo da entidade  <Text color="send"  variant="title1"fontSize={18}
              marginLeft="s"
              fontWeight="700"> 9898 </Text> introuza o seu numuro de referencia e <Text
              variant="title1"
              color="white"
              fontSize={18}
              marginLeft="s"
              fontWeight="700">
              {user.account_number}
              
            </Text> o valor que quer depositar a sua conta OmukandaPay.
            </Text>

        
        </Box>

        <Box paddingVertical="l">
         

         

       

         


          <TouchableOpacity>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginTop="m"
              paddingHorizontal="m">
              <ImageExpress
                      style={styles.tinyLogo}
                      source={{
                        uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple125/v4/46/11/3c/46113cf5-feed-284b-ca18-de6aef898cd2/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
                      }}
              >
              </ImageExpress>
              <Box>
                <Text variant="title2" fontSize={17}>
                Multicaixa express
                </Text>
              </Box>
            </Box>
          </TouchableOpacity>


          <TouchableOpacity>
            <Box
              flexDirection="row"
              justifyContent="space-between"
              marginTop="m"
              paddingHorizontal="m">
              <Box>
                <Text variant="title2" fontSize={17}>
                Precisa de Ajuda?
                </Text>
              </Box>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>

      {/* Tab Navigation */}
    
    </Box>
  );
}

export default More;
