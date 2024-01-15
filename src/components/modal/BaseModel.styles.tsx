import styled from "styled-components";

export const ModelOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  left: 100%;
  background-color: ${(props) => props.theme.colors.overlayPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
