import React from 'react';
import { TextInputProps } from 'react-native';
import * as S from './styles';

export type InputContainerProps = TextInputProps & {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

export const Input = (props: InputContainerProps): JSX.Element => {
  return (
    <S.InputContainer {...props}>
      <S.TextInput {...props} />
    </S.InputContainer>
  );
};
