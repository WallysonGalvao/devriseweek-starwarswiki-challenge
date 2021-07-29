import React, { useMemo } from 'react';
import { Platform } from 'react-native';
import LottieView from 'lottie-react-native';

import darthVader from '~/assets/lottie/darth-vader.json';
import lightsaber from '~/assets/lottie/lightsaber.json';
import bb8 from '~/assets/lottie/bb8.json';

import {
  dartColorFilters,
  lightsaberColorFilters,
  bb8ColorFilters,
} from './colorFilters';
import { useDataStore } from '~/services/stores';
import * as themes from '~/styles/themes';

type FileProps = {
  [key: string]: {
    source: string;
    colorFilters: {
      keypath: string;
      color: string;
    }[];
  };
};

type LoaderLottieProps = {
  loading: boolean;
  type?: 'splashscreen' | 'loading';
};

export const LoaderLottie = ({
  loading,
  type = 'loading',
}: LoaderLottieProps): JSX.Element => {
  const { selectedTheme } = useDataStore();
  const theme = themes[selectedTheme];

  if (!loading) return <></>;

  let path = 'lightsaber';
  if (type !== 'loading' && Platform.OS === 'android') path = 'darth';
  if (type !== 'loading' && Platform.OS === 'ios') path = 'bb8';

  const file: FileProps = {
    darth: {
      source: darthVader,
      colorFilters: dartColorFilters,
    },
    bb8: {
      source: bb8,
      colorFilters: bb8ColorFilters,
    },
    lightsaber: {
      source: lightsaber,
      colorFilters: lightsaberColorFilters,
    },
  };

  const colorFilters = useMemo(
    () =>
      file[path].colorFilters.map(item => ({
        ...item,
        color: theme.colors.primary,
      })),
    []
  );

  return (
    <LottieView
      style={{ zIndex: 1 }}
      source={file[path].source}
      autoPlay={loading}
      loop={loading}
      colorFilters={colorFilters}
    />
  );
};
