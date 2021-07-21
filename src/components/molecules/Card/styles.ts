import styled, { css } from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: ${theme.metrics.px(88)}px;
    height: ${theme.metrics.px(124)}px;
    border-radius: ${theme.metrics.px(8)}px;
    overflow: hidden;
    margin-right: ${theme.metrics.px(12)}px;
  `}
`;

export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
