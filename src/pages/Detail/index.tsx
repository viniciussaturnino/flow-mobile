import React from 'react';

import Header from '../../components/Header';
import Button from '../../components/Button';
import testImg from '../../assets/one.png';

import {
  Container,
  Image,
  TextContent,
  Title,
  Content,
  ButtonContent,
} from './styles';

const Detail: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Image source={testImg} />
        <TextContent>
          <Title>
            Lorem ipsum dolor sit amet,
            {'\n'}
          </Title>
          <Content>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
          </Content>
        </TextContent>
        <ButtonContent>
          <Button>EDITAR</Button>
          <Button style={{ marginTop: 10, marginBottom: 50 }}>EXCLUIR</Button>
        </ButtonContent>
      </Container>
    </>
  );
};

export default Detail;
