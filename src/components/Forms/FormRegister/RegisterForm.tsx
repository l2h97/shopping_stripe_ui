"use client";

import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import {
  ButtonContainer,
  FormContainer,
  InputContainer,
  LabelContainer,
  ValidateTextContainer,
} from "./RegisterForm.styles";
import isEmail from "validator/lib/isEmail";
import { passwordValidator } from "@/utilities/passwordValidator";
import { register } from "@/services/shoppingPortal.service";

export type RegisterData = {
  fullName: string;
  fullNameValidateError: string;
  email: string;
  emailValidateError: string;
  password: string;
  passwordValidateError: string;
  confirmPassword: string;
  confirmPasswordValidateError: string;
};

export const RegisterForm = () => {
  const [formData, setFormData] = useState<RegisterData>({
    fullName: "",
    fullNameValidateError: "",
    email: "",
    emailValidateError: "",
    password: "",
    passwordValidateError: "",
    confirmPassword: "",
    confirmPasswordValidateError: "",
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

  const handleChangePassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData((prev) => {
        if (!value) {
          return {
            ...prev,
            password: "",
            passwordValidateError: "Password must not empty",
          };
        }

        const isValidPassword = passwordValidator(value);
        if (!isValidPassword) {
          return {
            ...prev,
            password: value,
            passwordValidateError: "Password is invalid",
          };
        }

        return {
          ...prev,
          password: value,
          passwordValidateError: "",
        };
      });
    },
    [setFormData],
  );

  const handleChangeConfirmPassword = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      setFormData((prev) => {
        if (!value) {
          return {
            ...prev,
            confirmPassword: "",
            confirmPasswordValidateError: "Password must not empty",
          };
        }

        const isValidPassword = passwordValidator(value);
        if (!isValidPassword) {
          return {
            ...prev,
            confirmPassword: value,
            confirmPasswordValidateError: "Password is invalid",
          };
        }

        if (value !== formData.password) {
          return {
            ...prev,
            confirmPassword: value,
            confirmPasswordValidateError: "Password is not match",
          };
        }

        return {
          ...prev,
          confirmPassword: value,
          confirmPasswordValidateError: "",
        };
      });
    },
    [setFormData, formData.password],
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      register(formData);
    },
    [formData],
  );

  return (
    <FormContainer onSubmit={handleSubmit}>
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
        <InputContainer
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChangePassword}
        />
        {formData.passwordValidateError ? (
          <ValidateTextContainer>
            {formData.passwordValidateError}
          </ValidateTextContainer>
        ) : (
          <></>
        )}
      </LabelContainer>
      <LabelContainer>
        <span>Confirm Password:</span>
        <InputContainer
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChangeConfirmPassword}
        />
        {formData.confirmPasswordValidateError ? (
          <ValidateTextContainer>
            {formData.confirmPasswordValidateError}
          </ValidateTextContainer>
        ) : (
          <></>
        )}
      </LabelContainer>
      <ButtonContainer type="submit">Register</ButtonContainer>
    </FormContainer>
  );
};
