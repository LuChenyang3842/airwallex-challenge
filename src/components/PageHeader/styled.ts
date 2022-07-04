import { Layout } from 'antd';
import styled from '@emotion/styled';
import {
  GLOABL_SIZE,
  MEDIA_QUERY,
  THEME_COLOR,
} from 'src/constants/styleConstants';

export const Header = styled(Layout.Header)`
  width: 100vw;
  height: ${GLOABL_SIZE.headHeight}px;
  background-color: ${THEME_COLOR.primaryLight};
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: center;
`;

export const HeaderText = styled.div`
  left: 20%;
  font-size: 18px;
  color: white;
  @media screen and ${MEDIA_QUERY.XL} {
    font-size: 18px;
  }

  @media screen and ${MEDIA_QUERY.MD} {
    font-size: 16px;
  }
  @media screen and ${MEDIA_QUERY.SM} {
    font-size: 14px;
  }
`;
