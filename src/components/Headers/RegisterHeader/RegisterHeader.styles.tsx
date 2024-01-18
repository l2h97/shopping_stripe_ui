import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.screens.laptop};
  margin: 0 auto;
  height: 56px;
  padding: 0 16px;
  display: flex;
  gap: 5px;
`;
