import styled from "styled-components";

export const ModelOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  left: 100%;
  background-color: ${(props) => props.theme.colors.utilities.overlayGray};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(props) => props.theme.zIndex.modelOverLay};
`;
