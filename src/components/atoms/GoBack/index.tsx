import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { theme } from '~/styles/theme';

import * as S from './styles';

export const GoBack = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <S.GoBackContainer onPress={() => navigation.goBack()}>
      <Ionicons
        name="chevron-back"
        color={theme.colors.white}
        size={theme.metrics.px(28)}
      />
    </S.GoBackContainer>
  );
};
