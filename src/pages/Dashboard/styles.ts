import styled from 'styled-components/native';
import featherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
`;

export const Item = styled.View`
  width: 27px;
  height: 27px;
  margin-left: 10px;
`;

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image``;

export const Icon = styled(featherIcon)`
  margin-right: 10px;
`;
