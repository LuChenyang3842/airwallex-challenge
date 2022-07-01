import { Layout } from 'antd';
import styled from '@emotion/styled';
import { GLOABL_SIZE, THEME_COLOR } from 'src/constants/styleConstants';

export const Header = styled(Layout.Header)`
  width: 100vw;
  height: ${GLOABL_SIZE.headHeight}px;
  background-color: ${THEME_COLOR.primaryLight};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
