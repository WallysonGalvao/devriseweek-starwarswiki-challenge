import React from 'react';

import logoImage from '~/assets/images/LogoEmpire.png';

import * as S from './styles';

const sizes = {
  small: 28,
  large: 64,
};

type LogoProps = {
  size?: string;
};

export const Logo = ({ size }: LogoProps): JSX.Element => {
  return (
    <S.LogoImage
      source={logoImage}
      size={size ? sizes[size as keyof typeof sizes] : sizes.large}
    />
  );
};
