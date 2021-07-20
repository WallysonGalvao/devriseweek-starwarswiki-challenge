import React from 'react';
import {LogoImage} from './styles';
import logoImage from '../../../assets/LogoEmpire.png';

export const Logo = (): JSX.Element => {
  return <LogoImage source={logoImage} />;
};
