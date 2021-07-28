import React, { useEffect, useState } from 'react';
import { Share } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text, Logo } from '~/components/atoms';
import {
  Tag,
  IconButton,
  WatchButton,
  FavoriteStateModal,
} from '~/components/molecules';
import { DataResponse } from '~/services/hooks/useGetData';
import { useFavorites } from '~/services/hooks';
import { useDataStore } from '~/services/stores';

import { colors } from '~/styles/colors';

import * as S from './styles';

type HeroProps = {
  item: DataResponse;
  onDetail?: boolean;
};
export const Hero = ({ item, onDetail }: HeroProps): JSX.Element => {
  // const [loading, setLoading] = useState(true);
  const { navigate } = useNavigation();

  const { setSelectedData } = useDataStore();
  const { addFavorite, getFavorites, removeFavorite } = useFavorites();

  const [isFavorite, setIsFavorite] = useState(false);
  const [showFavoriteModal, setShowFavoriteModal] = useState<string | null>(
    null
  );

  const { image_url, title, subtitle, type } = item;

  const checkIsFavorite = async () => {
    // setLoading(true);
    const favorites = await getFavorites();
    const isInFavorite = favorites.filter(
      fv => fv.id === item.id && fv.type === item.type
    );
    setIsFavorite(isInFavorite.length > 0);
    // setLoading(false);
  };

  useEffect(() => {
    checkIsFavorite();
  }, []);

  const closeFavoriteModal = () => {
    setTimeout(() => {
      setShowFavoriteModal(null);
    }, 1000);
  };

  const addDataToFavorite = async () => {
    await addFavorite(item);
    setShowFavoriteModal('added');
    checkIsFavorite();
    closeFavoriteModal();
  };

  const removeDataFromFavorite = async () => {
    await removeFavorite(item);
    setShowFavoriteModal('removed');
    checkIsFavorite();
    closeFavoriteModal();
  };

  const onPressWatch = () => {
    setSelectedData(item);
    navigate('Watch');
  };

  const onPressDetail = () => {
    setSelectedData(item);
    navigate('Detail');
  };

  const onPressShare = async () => {
    const url = 'https://www.sevenapps.tech';
    try {
      const result = await Share.share({
        title: item.title,
        message: item.description,
        url,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <S.HeroContainer>
      <S.HeroImageBackground source={{ uri: image_url }}>
        <S.HeroGradient colors={[colors.dark, 'transparent', colors.dark]}>
          {!onDetail && <Logo size="small" />}
          <Tag mt={onDetail ? 224 : 200}>{type}</Tag>
          <Text fontFamily="bold" size={28} mt={8}>
            {title}
          </Text>
          <Text size={18}>{subtitle}</Text>
          <S.ButtonsView>
            <S.ButtomItemView align="flex-start">
              <IconButton
                onPress={() =>
                  isFavorite ? removeDataFromFavorite() : addDataToFavorite()
                }
                label={isFavorite ? 'Rem. Favoritos' : 'Add Favoritos'}
                iconName={
                  isFavorite ? 'remove-circle-outline' : 'add-circle-outline'
                }
              />
            </S.ButtomItemView>

            <S.ButtomItemView>
              <WatchButton onPress={onPressWatch} />
            </S.ButtomItemView>

            <S.ButtomItemView align="flex-end">
              {!onDetail ? (
                <IconButton
                  onPress={onPressDetail}
                  label="Saiba mais"
                  iconName="information-circle-outline"
                />
              ) : (
                <IconButton
                  onPress={onPressShare}
                  label="Compartilhar"
                  iconName="share-social"
                />
              )}
            </S.ButtomItemView>
          </S.ButtonsView>
        </S.HeroGradient>
      </S.HeroImageBackground>
      {!!showFavoriteModal && (
        <FavoriteStateModal
          type={showFavoriteModal}
          visible={!!showFavoriteModal}
          onClose={() => setShowFavoriteModal(null)}
        />
      )}
    </S.HeroContainer>
  );
};
