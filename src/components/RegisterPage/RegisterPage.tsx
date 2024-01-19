import Link from "next/link";
import { Container } from "./RegisterPage.styles";
import Image from "next/image";

export const RegisterPage = () => {
  return (
    <Container>
      <div>
        <Image
          src="/registerbg.jpg"
          alt="image welcome"
          width={100}
          height={100}
        />
        <div
          style={{
            width: "300px",
            height: "300px",
            backgroundColor: "violet",
          }}
        ></div>
      </div>
    </Container>
  );
};
