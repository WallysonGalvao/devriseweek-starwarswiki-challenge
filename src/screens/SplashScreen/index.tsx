import React from 'react';
import {Text, Logo} from '../../components';

import * as S from './styles';

export const SplashScreen = (): JSX.Element => {
  return (
    <S.Container>
      <Logo />
      <Text>StarWars - Wiki</Text>
    </S.Container>
  );
};
