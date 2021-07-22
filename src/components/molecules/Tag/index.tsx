import React from 'react';

import { Text } from '~/components/atoms';

import * as S from './styles';

export type TagProps = {
  children: React.ReactNode;
  mt: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

export const Tag = ({ children, ...props }: TagProps): JSX.Element => (
  <S.TagContainer {...props}>
    <Text fontFamily="bold" size={14}>
      {children}
    </Text>
  </S.TagContainer>
);
