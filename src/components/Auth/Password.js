import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import theme, {Box, Text} from '../theme';
import {Input, Form, Item, Button} from 'native-base';
import {StackActions} from '@react-navigation/native';
import {register, login} from '../../store/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';

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

function Password({navigation, route}) {
  const {navigate} = navigation;
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const {data, type} = route.params;

  const {isAuthenticated} = useSelector((state) => state.auth);

  const {msg} = useSelector((state) => state.err);

  const onSubmit = () => {
    if (type === 'REGISTER') {
      const {name, email, phone, userRef} = data;

      const newUser = {
        name,
        email,
        phone,
        password,
        userRef,
      };

      dispatch(register(newUser));
    } else if (type === 'LOGIN') {
      const {email} = data;
      dispatch(login({email, password}));
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigation.dispatch(StackActions.replace('Dashboard'));
    }
  }, [isAuthenticated]);

  return (
    <Box
      flex={1}
      backgroundColor="white"
      justifyContent="flex-start"
      position="relative">
      <Box paddingHorizontal="m" paddingVertical="m">
        <Box marginTop="m">
          <Box>
            {msg ? (
              <Text variant="body" color="danger" textAlign="center">
                {msg}
              </Text>
            ) : null}
          </Box>
          <Form>
            <Item style={{...styles.itemStyle}}>
              <Input
                placeholder="Senha"
                onChangeText={(password) => setPassword(password)}
                defaultValue={password}
              />
            </Item>
            <Item style={{...styles.itemStyle}}>
              <Button style={{...styles.btnStyle}} onPress={onSubmit}>
                <Text variant="title1" fontSize={18} fontWeight="700">
                  {type === 'LOGIN' ? 'Login' : 'Registar'}
                </Text>
              </Button>
            </Item>
          </Form>
        </Box>
      </Box>
    </Box>
  );
}

export default Password;
