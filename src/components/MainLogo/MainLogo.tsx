import Image from "next/image";
import logo from "../../../public/logo.svg";

export const MainLogo = () => {
  return (
    <>
      <Image src={logo} alt="main logo" />
    </>
  );
};
