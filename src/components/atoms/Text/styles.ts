import styled, {css} from 'styled-components/native';

type CustomTextProps = {
  color?: string;
};

export const CustomText = styled.Text<CustomTextProps>`
  ${({color}) => css`
    font-size: 24px;
    color: ${color || 'white'};
    font-weight: bold;
    margin-top: 12px;
  `}
`;
