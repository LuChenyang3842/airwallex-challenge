import styled from '@emotion/styled';
import { Layout } from 'antd';
import {
  GLOABL_SIZE,
  MEDIA_QUERY,
  THEME_COLOR,
} from 'src/constants/styleConstants';
import { LightButton } from 'src/styledComponents/Buttons';

export const PageContent = styled(Layout.Content)`
  padding: 0;
  height: calc(100vh - ${GLOABL_SIZE.footerHeight + GLOABL_SIZE.headHeight}px);
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.text`
  color: ${THEME_COLOR.primaryDark};
  font-size: 56px;
  font-weight: bold;
  line-height: 56px;
  @media screen and ${MEDIA_QUERY.XL} {
    font-size: 56px;
    line-height: 56px;
  }
  @media screen and ${MEDIA_QUERY.LG} {
    font-size: 48px;
    line-height: 48px;
  }
  @media screen and ${MEDIA_QUERY.MD} {
    font-size: 40px;
    line-height: 48px;
  }
  @media screen and ${MEDIA_QUERY.SM} {
    font-size: 32px;
    line-height: 32px;
  }
  @media screen and ${MEDIA_QUERY.XS} {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const SubTitle = styled.div`
  color: ${THEME_COLOR.primaryDark};
  font-size: 28px;
  font-weight: normal;
  @media screen and ${MEDIA_QUERY.XL} {
    font-size: 28px;
  }
  @media screen and ${MEDIA_QUERY.LG} {
    font-size: 24px;
  }
  @media screen and ${MEDIA_QUERY.MD} {
    font-size: 20px;
  }
  @media screen and ${MEDIA_QUERY.SM} {
    font-size: 16px;
  }
  @media screen and ${MEDIA_QUERY.XS} {
    font-size: 16px;
  }
`;

export const RequestButton = styled(LightButton)`
  font-size: 20px;
  font-color: ${THEME_COLOR.primaryDark};
  height: 50px;
  @media screen and ${MEDIA_QUERY.XL} {
    height: 50px;
    font-size: 20px;
  }
  @media screen and ${MEDIA_QUERY.MD} {
    font-size: 18px;
    height: 40px;
  }

  @media screen and ${MEDIA_QUERY.XS} {
    font-size: 16px;
    height: 35px;
  }
`;
