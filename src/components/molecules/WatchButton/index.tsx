import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from '~/components/atoms';
import { theme } from '~/styles/theme';

import * as S from './styles';

type WatchButtonProps = {
  onPress: () => void;
};
export const WatchButton = ({ onPress }: WatchButtonProps): JSX.Element => {
  return (
    <S.ButtonContainer onPress={onPress}>
      <Ionicons
        name="play"
        size={theme.metrics.px(14)}
        color={theme.colors.black}
      />
      <Text mt={2} ml={4} fontFamily="bold" size={14} color="black">
        Assistir
      </Text>
    </S.ButtonContainer>
  );
};
