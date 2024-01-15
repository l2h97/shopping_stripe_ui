import styled from "styled-components";

export const Wrapper = styled.div<{ width?: string }>`
  width: ${(props) => props.width || "100%"};
  aspect-ratio: 1 / 1;
  border: 1px solid ${(props) => props.theme.colors.borderPrimary};
  border-radius: 50%;
  overflow: hidden;
`;
