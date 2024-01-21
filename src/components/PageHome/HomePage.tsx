import Link from "next/link";
import { Container } from "./HomePage.styles";

export const HomePage = () => {
  return (
    <Container>
      <p>This is Home</p>
      <Link href="/register">Go to Register</Link>
    </Container>
  );
};
