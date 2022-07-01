import { Layout } from 'antd';
import styled from '@emotion/styled';
import { GLOABL_SIZE, THEME_COLOR } from 'src/constants/styleConstants';

export const Footer = styled(Layout.Footer)`
  width: 100vw;
  height: ${GLOABL_SIZE.footerHeight}px;
  background-color: ${THEME_COLOR.primaryLight};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
