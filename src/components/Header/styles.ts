import styled from 'styled-components/native';
import featherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  elevation: 4;
`;

export const Item = styled.View`
  width: 27px;
  height: 27px;
  margin-left: 10px;
`;

export const Image = styled.Image`
  width: 65px;
  height: 43px;
`;

export const Icon = styled(featherIcon)`
  margin-right: 10px;
`;
