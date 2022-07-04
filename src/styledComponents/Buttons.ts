import styled from '@emotion/styled';
import { Button } from 'antd';
import { THEME_COLOR } from 'src/constants/styleConstants';
export const DarkButton = styled(Button)`
  background-color: ${THEME_COLOR.primaryLight};
  &:active {
    background-color: ${THEME_COLOR.primaryDark};
  }
  &:hover {
    background-color: ${THEME_COLOR.primaryDark};
  }
`;

export const LightButton = styled(Button)`
  font-color: ${THEME_COLOR.primaryDark};
  &:active {
    color: ${THEME_COLOR.primaryLight};
    border-color: ${THEME_COLOR.primaryLight};
  }
  &:hover {
    color: ${THEME_COLOR.primaryLight};
    border-color: ${THEME_COLOR.primaryLight};
  }
`;
