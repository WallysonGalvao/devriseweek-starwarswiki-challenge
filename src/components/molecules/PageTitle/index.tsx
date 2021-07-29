import React from 'react';

import { Logo, Text } from '~/components/atoms';

import * as S from './styles';

type PageTitleProps = {
  title: string;
};

export const PageTitle = ({ title }: PageTitleProps): JSX.Element => {
  return (
    <S.Container>
      <Logo size="small" />
      <Text fontFamily="bold" size={28} ml={12} color="primary">
        {title}
      </Text>
    </S.Container>
  );
};
