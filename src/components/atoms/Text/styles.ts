import styled, { css } from 'styled-components/native';

type CustomTextProps = {
  color?: string;
};

export const CustomText = styled.Text<CustomTextProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.metrics.px(24)}px;
    color: ${color || theme.colors.red};
    margin-top: ${theme.metrics.px(12)}px;
    font-weight: bold;
  `}
`;
