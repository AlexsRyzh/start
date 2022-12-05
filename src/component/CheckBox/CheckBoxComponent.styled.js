import styled from "styled-components";

export const CheckBoxContainer = styled.span`
  width: ${props => props.width ?? 20}px;
  height: ${props => props.height ?? 20}px;
  background: ${props => props.checked ? "#6D71F9" : "#FFFFFF"
  };
  border-radius:${props => props.borderRadius ?? 5}px;
  border:  ${props => props.boderSize}px solid  ${props => props.boderColor};
  display:  flex;
  align-items: center;
  justify-content: center;
`;
