import Banner from "@/components/Banner";
import HouseList from "@/components/HouseList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[1800px]">
      <Banner />
      <HouseList />
    </div>
  );
}
