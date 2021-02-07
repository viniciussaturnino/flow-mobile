/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import { Image } from 'react-native';

import testImg from '../../assets/one.png';
import Button from '../../components/Button';

import { Container, CardTitle, CardContent, TextContent } from './styles';

const Card: React.FC = () => (
  <Container>
    <Image source={testImg} />
    <TextContent>
      <CardTitle>Lorem ipsum dolor sit amet,{'\n'}</CardTitle>
      <CardContent>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo
      </CardContent>
    </TextContent>
    <Button
      onPress={() => {
        console.log('Vai pra pag de Editar');
      }}
    >
      EDITAR
    </Button>
  </Container>
);

export default Card;
