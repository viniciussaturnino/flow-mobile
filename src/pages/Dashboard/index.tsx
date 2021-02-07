/* eslint-disable import/no-unresolved */
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Feather';
import Header from '../../components/Header';
import Card from '../../components/Card';

import { Container, CardList, AddButton } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <ScrollView>
        <CardList>
          <Card />
          <Card />
          <Card />
          <Card />
        </CardList>
      </ScrollView>
      <AddButton>
        <Icon name="plus-circle" size={35} color="#fff" />
      </AddButton>
    </Container>
  );
};

export default Dashboard;
