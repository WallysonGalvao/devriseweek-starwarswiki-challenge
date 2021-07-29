import styled, { css } from 'styled-components/native';

type CardContainerProps = {
  size: {
    h: number;
    w: number;
  };
};

export const Container = styled.View`
  ${({ theme }) => css`
    shadow-color: ${theme.colors.dark};
    shadow-offset: 0px 2px;
    shadow-opacity: 0.23;
    shadow-radius: 2.62px;
    elevation: 4;
    z-index: 999;
  `}
`;

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

export const TextContainer = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.metrics.px(10)}px;
    margin-right: ${theme.metrics.px(12)}px;
    position: absolute;
    left: 4px;
    bottom: 10px;
  `}
`;
