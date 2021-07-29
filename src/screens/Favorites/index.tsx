import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { ScreenScrollContainer, Text, GridList } from '~/components';
import { DataResponse, useFavorites } from '~/services/hooks';

export const FavoritesScreen = (): JSX.Element => {
  const { addListener } = useNavigation();
  const { getFavorites } = useFavorites();

  const [favoritesList, setFavoritesList] = useState<DataResponse[]>([]);

  const callGetFavorites = async () => {
    const favorites = await getFavorites();
    setFavoritesList(favorites);
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
      <Text fontFamily="bold" size={28} mb={24}>
        Favoritos
      </Text>
      <GridList type="favorites" data={favoritesList} />
    </ScreenScrollContainer>
  );
};
