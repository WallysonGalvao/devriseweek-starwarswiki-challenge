import React from 'react';
import { Text, Logo } from '~/components/atoms';
import { Tag, IconButton } from '~/components/molecules';
import { SelectedDataProps } from '~/services/stores';
import { colors } from '~/styles/colors';

import * as S from './styles';

type HeroProps = {
  item: SelectedDataProps;
  onDetail?: boolean;
};
export const Hero = ({ item, onDetail }: HeroProps): JSX.Element => {
  const { image_url, title, subtitle, type } = item;
  return (
    <S.HeroContainer>
      <S.HeroImageBackground
        source={{
          uri: image_url,
        }}>
        <S.HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}
          <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>
          <S.ButtonsView>
            <IconButton label="Favoritos" iconName="add-circle-outline" />

            {!onDetail && (
              <IconButton
                label="Saiba mais"
                iconName="information-circle-outline"
              />
            )}
          </S.ButtonsView>
        </S.HeroGradient>
      </S.HeroImageBackground>
    </S.HeroContainer>
  );
};
