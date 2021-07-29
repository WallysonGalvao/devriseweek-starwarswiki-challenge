import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text, Logo, Container, LoaderLottie } from '~/components';

export const SplashScreen = (): JSX.Element => {
  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => navigate('Home'), 2000);
  }, [navigate]);

  return (
    <Container align="center" justify="center">
      <View style={{ height: '60%', width: '100%' }}>
        <LoaderLottie loading type="splashscreen" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text fontFamily="bold" size={24} mt={12} mr={24}>
          StarWars - Wiki
        </Text>
        <Logo />
      </View>
    </Container>
  );
};
