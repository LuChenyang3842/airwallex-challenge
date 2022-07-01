import styled from '@emotion/styled';
import { Layout } from 'antd';
import {
  GLOABL_SIZE,
  MEDIA_QUERY,
  THEME_COLOR,
} from 'src/constants/styleConstants';

export const PageContent = styled(Layout.Content)`
  padding: 0;
  height: calc(100vh - ${GLOABL_SIZE.footerHeight + GLOABL_SIZE.headHeight}px);
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: ${THEME_COLOR.secondaryLight};
`;

export const Title = styled.div`
  color: ${THEME_COLOR.secondaryText};
  font-size: 56px;
  font-weight: 500;
  @media screen and ${MEDIA_QUERY.XL} {
    font-size: 56px;
  }
  @media screen and ${MEDIA_QUERY.LG} {
    font-size: 48px;
  }
  @media screen and ${MEDIA_QUERY.MD} {
    font-size: 40px;
  }
  @media screen and ${MEDIA_QUERY.SM} {
    font-size: 32px;
  }
  @media screen and ${MEDIA_QUERY.XS} {
    font-size: 32px;
  }
`;

export const SubTitle = styled.div`
  color: ${THEME_COLOR.secondaryText};
  font-size: 56px;
  font-weight: 500;
  @media screen and ${MEDIA_QUERY.XL} {
    font-size: 56px;
  }
  @media screen and ${MEDIA_QUERY.LG} {
    font-size: 48px;
  }
  @media screen and ${MEDIA_QUERY.MD} {
    font-size: 40px;
  }
  @media screen and ${MEDIA_QUERY.SM} {
    font-size: 32px;
  }
  @media screen and ${MEDIA_QUERY.XS} {
    font-size: 32px;
  }
`;
