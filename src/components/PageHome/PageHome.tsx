import Link from "next/link";
import { Container } from "./PageHome.styles";

export const PageHome = () => {
  return (
    <Container>
      <p>This is Home</p>
      <Link href="/register">Go to Register</Link>
    </Container>
  );
};
