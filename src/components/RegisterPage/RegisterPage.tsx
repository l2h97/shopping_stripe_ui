import Link from "next/link";
import {
  Container,
  ContentContainer,
  FormContainer,
  ImgContainer,
} from "./RegisterPage.styles";
import Image from "next/image";
import { RegisterForm } from "../Forms/FormRegister/RegisterForm";

export const RegisterPage = () => {
  return (
    <Container>
      <ContentContainer>
        <ImgContainer
          src="/pancakes-svgrepo-com.svg"
          alt="image welcome"
          width={100}
          height={100}
        />
        <FormContainer>
          <RegisterForm />
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};
