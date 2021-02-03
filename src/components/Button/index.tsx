/* eslint-disable react/prop-types */
import React from 'react';

import { ButtonText, Container } from './styles';

const Button: React.FC = ({ children }) => (
  <Container>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
