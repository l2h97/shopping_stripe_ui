import {
  ButtonContainer,
  FormContainer,
  InputContainer,
  LabelContainer,
} from "./RegisterForm.styles";

export const RegisterForm = () => {
  // const

  return (
    <FormContainer>
      <LabelContainer htmlFor="">
        <span>Email:</span>
        <InputContainer type="text" placeholder="Email" />
      </LabelContainer>
      <LabelContainer htmlFor="">
        <span>Password:</span>
        <InputContainer type="password" placeholder="Password" />
      </LabelContainer>
      <LabelContainer htmlFor="">
        <span>Confirm Password:</span>
        <InputContainer type="password" placeholder="Confirm Password" />
      </LabelContainer>
      <ButtonContainer>Register</ButtonContainer>
    </FormContainer>
  );
};
