import React from 'react';

import logoImage from '~/assets/images/symbols/empire.png';
import { items } from '~/screens/ThemeScreen/items';
import { useDataStore } from '~/services/stores';

import * as S from './styles';

const sizes = {
  small: 28,
  medium: 36,
  large: 64,
};

type LogoProps = {
  size?: string;
};

export const Logo = ({ size }: LogoProps): JSX.Element => {
  const { selectedTheme } = useDataStore();
  const image = items.find(item => item.theme === selectedTheme);
  return (
    <S.LogoImage
      source={image?.icon || logoImage}
      size={size ? sizes[size as keyof typeof sizes] : sizes.large}
    />
  );
};
