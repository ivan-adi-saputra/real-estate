"use client";
import { NextPage } from "next";
import { useContext } from "react";
import { HouseContext } from "./HouseContext";
import Link from "next/link";
import House from "./House";
import { ImSpinner2 } from "react-icons/im";

interface Props {}

const HouseList: NextPage<Props> = ({}) => {
  const { houses, loading } = useContext(HouseContext);

  // if loading is true
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

  // if house not found
  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, nothing found
      </div>
    );
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          {houses.map((house, index) => {
            return (
              <Link href={`/property/${house.id}`} key={index}>
                <House data={house} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseList;
