import React from 'react';
import theme, {Box, Text} from '../theme';
import {Container, Content} from 'native-base';

const transactions = [
  {type: 'send', price: -200, to: 'Samuel'},
  {type: 'receive', price: 400, to: 'Samuel'},
  
];

function Notifications() {
  return (
    <Container>
      <Content style={{paddingVertical: theme.spacing.m}}>
        {transactions.map(({type, price, to}, index) => (
          <Box
            key={index}
            paddingHorizontal="l"
            paddingVertical="l"
            style={{marginBottom: 4}}
            borderBottomWidth={1}>
            {type === 'send' ? (
              <Text variant="title2" fontSize={16} lineHeight={20} color="text">
                a sua transferencia de  {price} Kz para {to} foi concluida co sucesso
              </Text>
            ) : (
              <Text variant="title2" fontSize={16} lineHeight={20} color="text">
                voce recebeu {price} kz do {to} com sucesso
              </Text>
            )}
          </Box>
        ))}
      </Content>
    </Container>
  );
}

export default Notifications;
