import { NextPage } from "next";
import Logo from "@/public/assets/img/logo.svg";
import Link from "next/link";
import Image from "next/image";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <Image src={Logo} alt="" />
        </Link>
        {/* buttons */}
        <div className="flex items-center gap-6">
          <Link
            className="hover:text-violet-900 text-black transition"
            href={"/"}
          >
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            href={"/"}
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
