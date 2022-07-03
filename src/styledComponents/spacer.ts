import styled from '@emotion/styled';
type ISpacerProps = {
  width?: number;
  height?: number;
};

export const Spacer = styled.div<ISpacerProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;
