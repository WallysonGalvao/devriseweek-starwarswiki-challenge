import styled, { css } from 'styled-components/native';

export const SeparatorView = styled.View`
  ${({ theme }) => css`
    height: ${theme.metrics.px(12)}px;
  `}
`;

export const NoDataImage = styled.Image`
  ${({ theme }) => css`
    width: ${theme.metrics.px(48)}px;
    height: ${theme.metrics.px(48)}px;
    tint-color: ${theme.colors.primary};
  `}
`;
