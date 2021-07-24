import React from 'react';
import { Text } from '~/components/atoms';

import favoriteAdded from '~/assets/images/favorite-added.png';
import favoriteRemoved from '~/assets/images/favorite-removed.png';

import * as S from './styles';

type FavoritesStateModalProps = {
  visible: boolean;
  onClose: () => void;
  type: string;
};

export const FavoriteStateModal = ({
  visible,
  onClose,
  type,
}: FavoritesStateModalProps): JSX.Element => {
  return (
    <S.Modal visible={visible} transparent onRequestClose={onClose}>
      <S.ModalBackgroundContainer>
        <S.ModalContentContainer>
          <S.FavoriteImage
            source={type === 'added' ? favoriteAdded : favoriteRemoved}
          />
          <Text mt={24} align="center" size={28} fontFamily="bold">{`Favorito ${
            type === 'added' ? 'adicionado' : 'removido'
          } com sucesso!`}</Text>
        </S.ModalContentContainer>
      </S.ModalBackgroundContainer>
    </S.Modal>
  );
};
