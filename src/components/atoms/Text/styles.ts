import styled, { css } from 'styled-components/native';

import { TextProps } from '.';

export const CustomText = styled.Text<TextProps>`
  ${({ theme, color, size, mt, mb, ml, mr, fontFamily }) => css`
    font-size: ${theme.metrics.px(size || 24)}px;
    color: ${theme.colors[color || 'white']};
    margin-top: ${theme.metrics.px(mt || 0)}px;
    margin-bottom: ${theme.metrics.px(mb || 0)}px;
    margin-left: ${theme.metrics.px(ml || 0)}px;
    margin-right: ${theme.metrics.px(mr || 0)}px;
    font-family: ${theme.fonts[fontFamily || 'regular']};
  `}
`;
