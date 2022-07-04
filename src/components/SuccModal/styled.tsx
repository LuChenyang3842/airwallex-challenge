import styled from '@emotion/styled';
import { THEME_COLOR } from 'src/constants/styleConstants';
import { LightButton } from 'src/styledComponents/Buttons';

export const FinishButton = styled(LightButton)`
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
