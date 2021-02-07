/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container, Image, Icon, Item } from './styles';

const Button: React.FC = () => (
  <Container>
    <Item />
    <Image source={logoImg} />
    <Icon name="log-out" size={27} color="#00dcb7" />
  </Container>
);

export default Button;
