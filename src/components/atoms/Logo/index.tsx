import React from 'react';

import logoImage from '~/assets/images/LogoEmpire.png';

import { LogoImage } from './styles';

export const Logo = (): JSX.Element => {
  return <LogoImage source={logoImage} />;
};
