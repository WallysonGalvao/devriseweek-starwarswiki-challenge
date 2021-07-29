import styled, { css } from 'styled-components/native';

import { TagProps } from '.';

export const TagContainer = styled.View<TagProps>`
  ${({ theme, mt, mb, ml, mr }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    height: ${theme.metrics.px(24)}px;
    border-radius: ${theme.metrics.px(24)}px;
    max-width: ${theme.metrics.px(88)}px;
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
  `}
`;
