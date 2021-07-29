import React, { useState, useCallback, useMemo } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

import { Container, GoBack } from '~/components';
import { useDataStore } from '~/services/stores';
import * as themes from '~/styles/themes';

export const WatchScreen = (): JSX.Element => {
  const [playing, setPlaying] = useState(false);
  const { selectedData, selectedTheme } = useDataStore();
  const theme = themes[selectedTheme];

  const youtubeId = useMemo(() => {
    const id = selectedData.trailer_url.split('v=')[1].substring(0, 11);
    return id;
  }, [selectedData]);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <Container align="flex-start" justify="center">
      <YoutubePlayer
        height={theme.metrics.px(300)}
        width={theme.metrics.width}
        play={playing}
        videoId={youtubeId}
        onChangeState={onStateChange}
      />
      <GoBack />
    </Container>
  );
};
