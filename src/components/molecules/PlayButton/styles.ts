import styled, { css } from 'styled-components/native';

export const PlayContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    border-radius: ${theme.metrics.px(8)}px;
    height: ${theme.metrics.px(36)}px;
    width: ${theme.metrics.px(100)};
  `}
`;
