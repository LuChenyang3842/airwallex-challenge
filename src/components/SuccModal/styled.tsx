import styled from '@emotion/styled';
import { Button } from 'antd';
import { MEDIA_QUERY, THEME_COLOR } from 'src/constants/styleConstants';

export const FinishButton = styled(Button)`
  width: 60%;
`;

export const SuccessTextWrapper = styled.div`
  text-align: center;
  margin-left: 40px;
  margin-right: 40px;
`;

export const SuccessText = styled.div`
  color: ${THEME_COLOR.black};
  font-size: 15px;
  font-weight: normal;
`;
