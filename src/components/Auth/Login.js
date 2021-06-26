import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import theme, {Box, Text} from '../theme';
import {Input, Form, Item, Button} from 'native-base';

const styles = StyleSheet.create({
  itemStyle: {
    marginTop: 20,
  },
  btnStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.global,
    borderRadius: 5,
  },
});

function Login({navigation}) {
  const {navigate} = navigation;
  const [email, setEmail] = useState('claudio@gmail.com');

  const onLogin = () => {
    navigate('Password', {
      data: {
        email,
      },
      type: 'LOGIN',
    });
  };

  return (
    <Box flex={1} backgroundColor="white">
      <Box paddingHorizontal="m" paddingVertical="m">
        <Text>
         

          Onde você estiver criando uma conta ou entrando novamente, vamos começar
          com seu email &  senha
        </Text>
        <Box marginTop="m">
          <Form>
            <Item style={{...styles.itemStyle}}>
              <Input
                placeholder="Endereço de e-mail"
                onChangeText={(email) => setEmail(email)}
                defaultValue={email}
              />
            </Item>
            <Item style={{...styles.itemStyle}}>
              <Button style={{...styles.btnStyle}} onPress={onLogin}>
                <Text variant="title1" fontSize={18} fontWeight="700">
                Prosseguir
                </Text>
              </Button>
            </Item>
          </Form>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
