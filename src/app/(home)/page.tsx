import { HomePage } from "@/components/HomePage/HomePage";
import Link from "next/link";

export default function Home() {
  // const isAuth =
  // return <HomePage />;
  return (
    <>
      <p>Home page</p>
      <Link href="/register">back to register</Link>
    </>
  );
}
