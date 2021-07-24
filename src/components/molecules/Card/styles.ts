import styled, { css } from 'styled-components/native';

type CardContainerProps = {
  size: {
    h: number;
    w: number;
  };
};

export const CardContainer = styled.TouchableOpacity<CardContainerProps>`
  ${({ theme, size }) => css`
    width: ${theme.metrics.px(size.w)}px;
    height: ${theme.metrics.px(size.h)}px;
    border-radius: ${theme.metrics.px(8)}px;
    overflow: hidden;
    margin-right: ${theme.metrics.px(12)}px;
  `}
`;

export const CardImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;
