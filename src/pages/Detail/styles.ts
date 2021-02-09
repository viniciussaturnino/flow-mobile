/* eslint-disable @typescript-eslint/no-unused-vars */
import styled from 'styled-components/native';
import { Image as Img } from 'react-native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Image = styled(Img)`
  width: 100%;
`;

export const TextContent = styled.View`
  justify-content: center;
  padding: 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const Content = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;

export const ButtonContent = styled.View`
  align-items: center;
  justify-content: center;
`;
