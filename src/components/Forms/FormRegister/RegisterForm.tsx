import { FormContainer } from "./RegisterForm.styles";

export const RegisterForm = () => {
  return (
    <FormContainer>
      <label htmlFor="">
        <span>Email:</span>
        <input type="text" />
      </label>
      <label htmlFor="">
        <span>Password:</span>
        <input type="password" />
      </label>
      <label htmlFor="">
        <span>Confirm Password:</span>
        <input type="password" />
      </label>
    </FormContainer>
  );
};
