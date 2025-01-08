"use client";
import { NextPage } from "next";
import { useContext } from "react";
import { HouseContext } from "./HouseContext";
import Link from "next/link";
import House from "./House";

interface Props {}

const HouseList: NextPage<Props> = ({}) => {
  const { houses, loading } = useContext(HouseContext);

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
