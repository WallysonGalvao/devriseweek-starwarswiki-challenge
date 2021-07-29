import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { Text } from '~/components/atoms';
import { useTheme } from '~/services/hooks';
import { useDataStore } from '~/services/stores';
import { ThemeKeysProps } from '~/styles/themes';

import * as S from './styles';

type SymbolCardProps = {
  title: string;
  imageSource: ImageSourcePropType;
  theme: ThemeKeysProps;
};

export const SymbolCard = ({
  imageSource,
  title,
  theme,
}: SymbolCardProps): JSX.Element => {
  const { selectedTheme, setTheme } = useDataStore();
  const { addTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme);
    addTheme(theme);
  };

  return (
    <S.SymbolCardContainer
      onPress={handleTheme}
      isSelected={selectedTheme === theme}>
      <S.SymbolCardImage source={imageSource} />
      <Text mt={5} size={16} align="center">
        {title}
      </Text>
    </S.SymbolCardContainer>
  );
};
