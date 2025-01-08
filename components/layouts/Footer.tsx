import { NextPage } from "next";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <footer className="bg-black py-8 text-center text-white">
      <div className="container mx-auto">
        Copyright &copy; 2025 by{" "}
        <a target="_blank" href="" className="text-violet-500 font-semibold">
          Ivan Adi Saputra
        </a>
        . All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
