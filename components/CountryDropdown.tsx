"use client";
import { NextPage } from "next";
import { useContext, useState } from "react";
import { HouseContext } from "./HouseContext";
import { Menu } from "@headlessui/react";
import { RiArrowDownSLine, RiArrowUpSLine, RiMapPinLine } from "react-icons/ri";

interface Props {}

const CountryDropdown: NextPage<Props> = ({}) => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Menu as={"div"} className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiMapPinLine className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">{country}</div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {countries.map((country, index) => {
          return (
            <Menu.Item
              as={"li"}
              onClick={() => setCountry(country)}
              className="cursor-pointer hover:text-violet-700 transition"
              key={index}
            >
              {country}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
