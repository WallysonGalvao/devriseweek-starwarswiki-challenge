import React, { useState, useEffect } from 'react';
import { View, Linking, Alert } from 'react-native';

import { Text } from '~/components/atoms';
import { useDataStore } from '~/services/stores';
import { DataWTWResponse, useWhereToWatch } from '~/services/hooks';

// import platforms from './platforms.json';

import * as S from './styles';

export const WhereToWatchList = (): JSX.Element => {
  const { selectedData } = useDataStore();
  const { getWhereToWatch } = useWhereToWatch();

  const [platforms, setPlatforms] = useState<DataWTWResponse[]>([]);

  const callget = async () => {
    const query = `${selectedData.subtitle}`;
    const platformsResponse = await getWhereToWatch(query);
    if (!platformsResponse.error) setPlatforms(platformsResponse);
  };

  const handleWatch = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  useEffect(() => {
    callget();
  }, [callget]);

  return (
    <View>
      <Text ml={24} fontFamily="black" size={18}>
        Onde assistir
      </Text>
      <S.ScrollView>
        {platforms.map(platform => (
          <S.Card
            key={platform.Watch}
            onPress={() => handleWatch(platform.WatchUrl)}>
            <S.Image
              source={{
                uri: `${platform.Company.LogoUrl.replace('http', 'https')}`,
              }}
            />
          </S.Card>
        ))}
      </S.ScrollView>
    </View>
  );
};
