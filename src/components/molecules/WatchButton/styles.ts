import styled, { css } from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: ${theme.metrics.px(100)}px;
    height: ${theme.metrics.px(36)}px;
    border-radius: ${theme.metrics.px(8)}px;
    background-color: ${theme.colors.white};
  `}
`;
