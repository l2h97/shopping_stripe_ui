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

  @media (max-width: ${(props) => props.theme.screens.phone}) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 80%;

  @media (max-width: ${(props) => props.theme.screens.phone}) {
    width: 100%;
    /* height: auto; */
  }
`;
