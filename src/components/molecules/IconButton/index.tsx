import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text } from '~/components/atoms';
import { theme } from '~/styles/theme';

import * as S from './styles';

type iIconButtonProps = {
  iconName: string;
  label: string;
  onPress?: () => void;
};

export const IconButton = ({
  iconName,
  label,
  onPress,
}: iIconButtonProps): JSX.Element => {
  return (
    <S.ButtonContainer onPress={onPress}>
      <Ionicons
        name={iconName}
        size={theme.metrics.px(24)}
        color={theme.colors.white}
      />
      <Text fontFamily="semibold" size={10} mt={6}>
        {label}
      </Text>
    </S.ButtonContainer>
  );
};
