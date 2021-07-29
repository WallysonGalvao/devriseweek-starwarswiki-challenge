import styled, { css } from 'styled-components/native';

export const SymbolCardContainer = styled.TouchableOpacity<{
  isSelected: boolean;
}>`
  ${({ theme, isSelected }) => css`
    width: ${theme.metrics.px(45)}%;
    height: ${theme.metrics.px(130)}px;
    padding: ${theme.metrics.px(10)}px;
    margin-bottom: ${theme.metrics.px(10)}px;
    align-items: center;
    justify-content: space-between;
    border-width: 0.5px;

    ${isSelected &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.primary};
    `}
  `}
`;

export const SymbolCardImage = styled.Image`
  width: 70px;
  height: 70px;
`;
