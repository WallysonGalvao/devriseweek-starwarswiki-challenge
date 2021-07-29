import styled from 'styled-components/native';

export const ScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-left: 24px;
`;

export const Card = styled.TouchableOpacity`
  margin-right: 10px;
  margin-vertical: 10px;
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
