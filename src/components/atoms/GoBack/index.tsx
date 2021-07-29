import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import * as themes from '~/styles/themes';
import { useDataStore } from '~/services/stores';

import * as S from './styles';

export const GoBack = (): JSX.Element => {
  const { goBack } = useNavigation();
  const { selectedTheme } = useDataStore();
  const theme = themes[selectedTheme];

  return (
    <S.GoBackContainer onPress={() => goBack()}>
      <Ionicons
        name="chevron-back"
        color={theme.colors.primary}
        size={theme.metrics.px(28)}
      />
    </S.GoBackContainer>
  );
};
