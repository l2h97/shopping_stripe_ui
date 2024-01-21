"use client";

import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.border.borderGray};
  border-radius: 24px;
  padding: 16px;
`;
