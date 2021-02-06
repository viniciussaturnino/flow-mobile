/* eslint-disable import/no-unresolved */
import React from 'react';

import logoImg from '../../assets/logo.png';

import { Container, Header, Item, Image, Icon } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Item />
        <Image source={logoImg} />
        <Icon name="log-out" size={27} color="#00dcb7" />
      </Header>
    </Container>
  );
};

export default Dashboard;
