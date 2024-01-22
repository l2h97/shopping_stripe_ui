import {
  Container,
  ContentContainer,
  FormContainer,
  ImgContainer,
} from "./PageRegister.styles";
import { RegisterForm } from "../Forms/FormRegister/RegisterForm";

export const PageRegister = () => {
  return (
    <Container>
      <ContentContainer>
        <ImgContainer
          src="/pancakes-svgrepo-com.svg"
          alt="image welcome"
          width={100}
          height={100}
          priority
        />
        <FormContainer>
          <RegisterForm />
        </FormContainer>
      </ContentContainer>
    </Container>
  );
};
