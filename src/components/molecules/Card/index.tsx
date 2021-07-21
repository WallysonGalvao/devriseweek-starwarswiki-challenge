import React from 'react';
import { CardContainer, CardImage } from './styles';

type CardProps = {
  item: {
    id: number;
    image_url: string;
  };
};

export const Card = ({ item }: CardProps): JSX.Element => {
  return (
    <CardContainer>
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  );
};
