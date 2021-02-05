/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { TextInputProps } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { Container, Text } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => (
  <Container>
    <Text>{label}</Text>
    <TextInput placeholderTextColor="#707070" {...rest} />
  </Container>
);

export default Input;
