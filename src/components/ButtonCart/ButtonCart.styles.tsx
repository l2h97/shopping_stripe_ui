import styled from "styled-components";

export const Container = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "100%"};
  aspect-ratio: 1 / 1;
  border: 1px solid ${(props) => props.theme.colors.border.borderRed};
  border-radius: 50%;
  position: relative;
`;

export const CountContainer = styled.span`
  position: absolute;
  top: -3px;
  right: -3px;
  background-color: ${(props) => props.theme.colors.utilities.notificationRed};
  width: 15px;
  height: 15px;
  color: ${(props) => props.theme.colors.text.textRed};
  font-size: ${(props) => props.theme.fontSize.ms};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
