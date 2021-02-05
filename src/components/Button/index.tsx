/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonText, Container } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default Button;
