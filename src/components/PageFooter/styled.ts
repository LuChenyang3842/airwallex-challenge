import { Layout } from 'antd';
import styled from '@emotion/styled';
import {
  GLOABL_SIZE,
  MEDIA_QUERY,
  THEME_COLOR,
} from 'src/constants/styleConstants';

export const Footer = styled(Layout.Footer)`
  width: 100vw;
  height: ${GLOABL_SIZE.footerHeight}px;
  background-color: ${THEME_COLOR.primaryLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterText = styled.div`
  font-style: italic;
  text-align: center;
  font-size: 16px;
  color: white;
  @media screen and ${MEDIA_QUERY.XL} {
    font-size: 16px;
  }

  @media screen and ${MEDIA_QUERY.MD} {
    font-size: 14px;
  }
  @media screen and ${MEDIA_QUERY.SM} {
    font-size: 12px;
  }
`;
