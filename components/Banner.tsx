import { NextPage } from "next";
import ImageBanner from "@/public/assets/img/house-banner.png";
import Image from "next/image";
import Search from "./Search";

interface Props {}

const Banner: NextPage<Props> = ({}) => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-violet-700">Rent</span> Your Dream House With
            Us.
          </h1>
          <p className="max-w-[480px] mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rem
            tempore illo et minus nesciunt, libero perferendis, ullam dolor
            facere fugit qui deleniti beatae nulla, quo ut placeat molestias
            excepturi officiis omnis laborum impedit? Quasi inventore tenetur
            aliquam sunt fuga officia, magnam id, beatae cumque expedita culpa
          </p>
        </div>
        {/* image */}
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <Image src={ImageBanner} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
