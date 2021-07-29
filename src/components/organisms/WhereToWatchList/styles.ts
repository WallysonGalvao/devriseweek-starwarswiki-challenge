import styled, { css } from 'styled-components/native';

export const ScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  ${({ theme }) => css`
    margin-left: ${theme.metrics.px(24)}px;
  `}
`;

export const Card = styled.TouchableOpacity`
  ${({ theme }) => css`
    margin-right: ${theme.metrics.px(10)}px;
    margin-top: ${theme.metrics.px(10)}px;
    margin-bottom: ${theme.metrics.px(30)}px;
  `}
`;

export const Image = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;
