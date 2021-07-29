import styled from 'styled-components/native';

type LoaderProps = {
  color: string;
};

export const Loader = styled.ActivityIndicator.attrs<LoaderProps>(
  ({ color }) => ({
    size: 'large',
    color,
  })
)``;
