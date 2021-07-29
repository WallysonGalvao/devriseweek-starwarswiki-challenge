import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    margin-bottom: ${theme.metrics.px(24)}px;
  `}
`;
