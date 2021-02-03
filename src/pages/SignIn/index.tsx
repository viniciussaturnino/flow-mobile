import React from 'react';
import { Image } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container, Text } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} style={{ marginBottom: 100 }} />
      <Text>E-mail</Text>
      <Input />
      <Text>Senha</Text>
      <Input />
      <Button>ENTRAR</Button>
    </Container>
  );
};

export default SignIn;
