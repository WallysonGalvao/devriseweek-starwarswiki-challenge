import styled, { css } from 'styled-components/native';

export const CardContainer = styled.TouchableOpacity<{ isSelected: boolean }>`
  ${({ theme, isSelected }) => css`
    width: 45%;
    height: 130px;
    padding: 10px;
    margin-bottom: 10px;
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

export const CardImage = styled.Image`
  width: 70px;
  height: 70px;
`;
