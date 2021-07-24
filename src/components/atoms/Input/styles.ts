import styled, { css } from 'styled-components/native';

import { InputContainerProps } from '.';

export const InputContainer = styled.View<InputContainerProps>`
  ${({ theme, mt, mb, ml, mr }) => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: ${theme.metrics.px(327)}px;
    height: ${theme.metrics.px(42)}px;
    border-radius: ${theme.metrics.px(12)};
    border-width: ${theme.metrics.px(1)}px;
    border-color: ${theme.colors.light};
    padding: ${theme.metrics.px(6)}px;
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
  `}
`;

export const TextInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.grey,
}))`
  ${({ theme }) => css`
    height: 100%;
    width: 100%;
    font-family: ${theme.fonts.semibold};
    color: ${theme.colors.white};
    font-size: ${theme.metrics.px(14)}px;
  `}
`;
