"use client";

import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  padding: 16px 0;
`;

export const ContentContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const ImgContainer = styled(Image)`
  width: 50%;
  max-width: 500px;
  height: auto;
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 80%;
  border: 1px solid ${(props) => props.theme.colors.border.borderPrimary};
  border-radius: 24px;
`;
