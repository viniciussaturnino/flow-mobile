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

export const Image = styled.Image`
  width: 42px;
  height: 42px;
`;

export const Icon = styled(featherIcon)`
  margin-right: 10px;
`;

export const CardList = styled.View`
  align-items: center;
`;

export const AddButton = styled.TouchableOpacity`
  position: absolute;
  right: 27px;
  bottom: 65px;
  align-items: center;
  justify-content: center;
  width: 58px;
  height: 58px;
  border-radius: 29px;
  background: #00dcb7;
`;
