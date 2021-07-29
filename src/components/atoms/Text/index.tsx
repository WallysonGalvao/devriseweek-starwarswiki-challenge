import React from 'react';

import * as themes from '~/styles/themes';

import * as S from './styles';

export type TextProps = {
  children: React.ReactNode;
  color?: keyof typeof themes.empire.colors;
  size?: number;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  fontFamily?: keyof typeof themes.empire.fonts;
  lh?: number;
  align?: string;
};

export const Text = ({ children, ...props }: TextProps): JSX.Element => {
  return <S.CustomText {...props}>{children}</S.CustomText>;
};
