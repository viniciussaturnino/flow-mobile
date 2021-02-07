import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import { Container } from './styles';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Image source={logoImg} style={{ marginBottom: 100 }} />
      <Input name="email" placeholder="E-mail" label="E-mail" />
      <Input name="password" placeholder="Senha" label="Senha" />
      <Button
        onPress={() => navigation.navigate('Dashboard')}
        style={{ marginTop: 90 }}
      >
        ENTRAR
      </Button>
    </Container>
  );
};

export default SignIn;
