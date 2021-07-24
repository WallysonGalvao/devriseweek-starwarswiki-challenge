import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Text, Logo, Container } from '~/components';

export const SplashScreen = (): JSX.Element => {
  const { navigate } = useNavigation();

  useEffect(() => {
    setTimeout(() => navigate('Home'), 1000);
  }, [navigate]);

  return (
    <Container align="center" justify="center">
      <Logo />
      <Text fontFamily="bold" size={24} mt={12}>
        StarWars - Wiki
      </Text>
    </Container>
  );
};
