import React from 'react';
import { Text } from '~/components/atoms';

import * as S from './styles';

export const PlayButton = (): JSX.Element => {
  return (
    <S.PlayContainer>
      <Text>Play</Text>
    </S.PlayContainer>
  );
};
