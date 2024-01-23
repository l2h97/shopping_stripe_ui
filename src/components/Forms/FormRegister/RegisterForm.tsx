"use client";

import { ChangeEvent, useCallback, useState } from "react";
import {
  ButtonContainer,
  FormContainer,
  InputContainer,
  LabelContainer,
  ValidateTextContainer,
} from "./RegisterForm.styles";
import isEmail from "validator/lib/isEmail";

export type RegisterData = {
  fullName: string;
  fullNameValidateError: string;
  email: string;
  emailValidateError: string;
  passwordHashed: string;
  passwordValidateError: string;
};

export const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterData>({
    fullName: "",
    fullNameValidateError: "",
    email: "",
    emailValidateError: "",
    passwordHashed: "",
    passwordValidateError: "",
  });

  const handleChangeFullName = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData((prev) => {
        if (!value) {
          return {
            ...prev,
            fullNameValidateError: "Full name must not empty",
            fullName: "",
          };
        }

        if (value.length > 50) {
          return {
            ...prev,
            fullNameValidateError: "Full name is too long",
          };
        }

        return {
          ...prev,
          fullNameValidateError: "",
          fullName: value,
        };
      });
    },
    [setFormData],
  );

  const handleChangeEmail = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setFormData((prev) => {
        if (!value) {
          return {
            ...prev,
            emailValidateError: "Email must not empty",
            email: "",
          };
        }

        if (!isEmail(value)) {
          return {
            ...prev,
            emailValidateError: "Email is invalid",
            email: value,
          };
        }

        return {
          ...prev,
          emailValidateError: "",
          email: value,
        };
      });
    },
    [setFormData],
  );

  return (
    <FormContainer>
      <LabelContainer>
        <span>Full name:</span>
        <InputContainer
          type="text"
          placeholder="Full name"
          value={formData.fullName}
          onChange={handleChangeFullName}
        />
        {formData.fullNameValidateError ? (
          <ValidateTextContainer>
            {formData.fullNameValidateError}
          </ValidateTextContainer>
        ) : (
          <></>
        )}
      </LabelContainer>
      <LabelContainer>
        <span>Email:</span>
        <InputContainer
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={handleChangeEmail}
        />
        {formData.emailValidateError ? (
          <ValidateTextContainer>
            {formData.emailValidateError}
          </ValidateTextContainer>
        ) : (
          <></>
        )}
      </LabelContainer>
      <LabelContainer>
        <span>Password:</span>
        <InputContainer type="password" placeholder="Password" />
      </LabelContainer>
      <LabelContainer>
        <span>Confirm Password:</span>
        <InputContainer type="password" placeholder="Confirm Password" />
      </LabelContainer>
      <ButtonContainer type="submit">Register</ButtonContainer>
    </FormContainer>
  );
};
