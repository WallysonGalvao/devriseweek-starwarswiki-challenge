import React from 'react';

import { theme } from '~/styles/theme';

import * as S from './styles';

export type TextProps = {
  children: React.ReactNode;
  color?: keyof typeof theme.colors;
  size?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  fontFamily?: keyof typeof theme.fonts;
};

export const Text = ({ children, ...props }: TextProps): JSX.Element => {
  return <S.CustomText {...props}>{children}</S.CustomText>;
};
