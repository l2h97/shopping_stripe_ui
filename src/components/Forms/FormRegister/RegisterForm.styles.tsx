"use client";

import { CustomButton } from "@/components/Customs/CustomButton";
import { CustomInput } from "@/components/Customs/Input.custom";
import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  height: 100%;
  border: 1px solid ${(props) => props.theme.colors.border.borderGray};
  border-radius: 16px;
  padding: 16px;
`;

export const LabelContainer = styled.label`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputContainer = styled(CustomInput)`
  padding: 8px;
  border: 1px solid ${(props) => props.theme.colors.border.borderGray};
  border-radius: 8px;
`;

export const ButtonContainer = styled(CustomButton)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.text.textRed};
  background-color: ${(props) => props.theme.colors.background.bgPink};
`;

export const ValidateTextContainer = styled.p`
  color: ${(props) => props.theme.colors.text.textRed};
`;
