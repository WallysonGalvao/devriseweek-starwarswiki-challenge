import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ScreenScrollContainer, Text } from '~/components';
import { useFavorites } from '~/services/hooks';

export const FavoritesScreen = (): JSX.Element => {
  const { addListener } = useNavigation();
  const { getFavorites } = useFavorites();

  const callGetFavorites = async () => {
    await getFavorites();
  };

  useEffect(() => {
    const unsubscribe = addListener('focus', () => {
      callGetFavorites();
    });

    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScreenScrollContainer withPadding>
      <Text fontFamily="bold" size={28}>
        Favoritos
      </Text>
    </ScreenScrollContainer>
  );
};
