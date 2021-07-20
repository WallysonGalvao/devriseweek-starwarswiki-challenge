import React from 'react';
import {CustomText} from './styles';

type TextProps = {
  children: React.ReactNode;
  color?: string;
};

export const Text = ({children, color}: TextProps): JSX.Element => {
  return <CustomText color={color}>{children}</CustomText>;
};
