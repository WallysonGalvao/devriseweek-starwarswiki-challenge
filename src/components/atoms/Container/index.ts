import styled, { css } from 'styled-components/native';

import { colors } from '~/styles/colors';

type ContainerProps = {
  dir?: string;
  align?: string;
  justify?: string;
  bg?: keyof typeof colors;
  w?: number;
  h?: number;
};

type ScreenScrollContainerProps = {
  bg?: keyof typeof colors;
  withPadding?: boolean;
};

export const Container = styled.View<ContainerProps>`
  ${({ theme, dir, align, justify, bg, w, h }) => css`
    display: flex;
    flex-direction: ${dir || 'column'};
    align-items: ${align || 'flex-start'};
    justify-content: ${justify || 'flex-start'};
    background-color: ${theme.colors[bg || 'dark']};
    width: ${w ? `${theme.metrics.px(w)}px` : '100%'};
    height: ${h ? `${theme.metrics.px(h)}px` : '100%'};
  `}
`;

export const ScreenScrollContainer = styled.ScrollView.attrs<ScreenScrollContainerProps>(
  ({ theme, withPadding }) => ({
    contentContainerStyle: withPadding
      ? {
          paddingHorizontal: theme.metrics.px(24),
          paddingVertical: theme.metrics.px(56),
        }
      : {},
  })
)<ScreenScrollContainerProps>`
  ${({ theme, bg }) => css`
    background-color: ${theme.colors[bg || 'dark']};
  `}
`;
