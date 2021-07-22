import styled, { css } from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const HeroContainer = styled.View`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: ${theme.metrics.px(460)}px;
  `}
`;

export const HeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export const HeroGradient = styled(LinearGradient)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-horizontal: ${theme.metrics.px(24)}px;
    padding-top: ${theme.metrics.px(56)}px;
  `}
`;

export const ButtonsView = styled.View`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    margin-top: ${theme.metrics.px(12)}px;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
  `}
`;
