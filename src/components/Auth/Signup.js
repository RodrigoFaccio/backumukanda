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

function Signup({navigation}) {
  const {navigate} = navigation;
  const [name, setName] = useState('Yuri Antonio');
  const [email, setEmail] = useState('claudio@gmail.com');
  const [phone, setPhone] = useState('123456789');
  const [userRef, setUserRef] = useState('');

  const onSubmit = () => {
    if (!email || !phone) return alert('Por favor, defina todos os campos');

    const newUser = {name, email, phone, userRef};

    navigate('Password', {
      data: newUser,
      type: 'REGISTER',
    });
  };

  return (
    <Box flex={1} backgroundColor="white">
      <Box paddingHorizontal="m" paddingVertical="m">
        <Box marginTop="m">
          <Form>
            <Item style={{...styles.itemStyle}}>
              <Input
                placeholder="Name & Surname"
                defaultValue={name}
                onChangeText={(name) => setName(name)}
              />
            </Item>

            <Item style={{...styles.itemStyle}}>
              <Input
                placeholder="Endereço de e-mail"
                keyboardType="email-address"
                defaultValue={email}
                onChangeText={(email) => setEmail(email)}
              />
            </Item>
            <Item style={{...styles.itemStyle}}>
              <Input
                placeholder="Número de telefone"
                keyboardType="number-pad"
                onChangeText={(phone) => setPhone(phone)}
                defaultValue={phone}
                onSubmitEditing={onSubmit}
              />
            </Item>

            <Item style={{...styles.itemStyle}}>
              <Input
                placeholder="Código de referência (opcional)"
                onChangeText={(userRef) => setUserRef(userRef)}
                defaultValue={userRef}
                onSubmitEditing={onSubmit}
              />
            </Item>

            <Item style={{...styles.itemStyle}}>
              <Button style={{...styles.btnStyle}} onPress={onSubmit}>
                <Text variant="title1" fontSize={18} fontWeight="700">
                  Continue
                </Text>
              </Button>
            </Item>
          </Form>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
