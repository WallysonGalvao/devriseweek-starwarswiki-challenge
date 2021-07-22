import styled, { css } from 'styled-components/native';

type LogoImageProps = {
  size: number;
};

export const LogoImage = styled.Image<LogoImageProps>`
  ${({ theme, size }) => css`
    height: ${theme.metrics.px(size)}px;
    width: ${theme.metrics.px(size)}px;
  `}
`;
