import styled, { css } from 'styled-components/native';

export const PlayButtonContainer = styled.TouchableOpacity`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.white};
    width: ${theme.metrics.px(100)}px;
    height: ${theme.metrics.px(36)}px;
    border-radius: ${theme.metrics.px(8)}px;
  `}
`;
