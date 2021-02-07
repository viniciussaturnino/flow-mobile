/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/logo.png';

import { Container, Image, Icon, Item } from './styles';

const Button: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Item />
      <Image source={logoImg} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      >
        <Icon name="log-out" size={27} color="#00dcb7" />
      </TouchableOpacity>
    </Container>
  );
};

export default Button;
