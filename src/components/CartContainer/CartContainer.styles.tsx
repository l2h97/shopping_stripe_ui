import styled from "styled-components";

export const Wrapper = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "100%"};
  aspect-ratio: 1 / 1;
  border: 1px solid ${(props) => props.theme.colors.borderPrimary};
  border-radius: 50%;
  position: relative;
`;

export const CountContainer = styled.span`
  position: absolute;
  top: -3px;
  right: -3px;
  background-color: ${(props) => props.theme.colors.notificationPrimary};
  width: 15px;
  height: 15px;
  color: ${(props) => props.theme.colors.textTertiary};
  font-size: ${(props) => props.theme.fontSize.ms};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
