import Link from "next/link";
import { MainLogoIcon } from "../Icons/MainLogoIcon";

export const MainLogo = () => {
  return (
    <>
      <Link href="/">
        <MainLogoIcon />
      </Link>
    </>
  );
};
