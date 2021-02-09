/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import testImg from '../../assets/one.png';
import Button from '../../components/Button';

import { Container, CardTitle, CardContent, TextContent } from './styles';

const Card: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Detail')}>
      <Image source={testImg} />
      <TextContent>
        <CardTitle>Lorem ipsum dolor sit amet,{'\n'}</CardTitle>
        <CardContent>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo
        </CardContent>
      </TextContent>
      <Button onPress={() => navigation.navigate('Detail')}>EDITAR</Button>
    </Container>
  );
};

export default Card;
