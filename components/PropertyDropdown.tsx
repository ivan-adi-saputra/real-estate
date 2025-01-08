"use client";
import { NextPage } from "next";
import { useContext, useState } from "react";
import { HouseContext } from "./HouseContext";
import { Menu } from "@headlessui/react";
import {
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiHome5Line,
  RiMapPinLine,
} from "react-icons/ri";

interface Props {}

const PropertyDropdown: NextPage<Props> = ({}) => {
  const { property, setProperty, properties } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Menu as={"div"} className="dropdown relative">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {property}
          </div>
          <div className="text-[13px]">Select your place</div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      <Menu.Items className="dropdown-menu">
        {properties.map((property, index) => {
          return (
            <Menu.Item
              as={"li"}
              onClick={() => setProperty(property)}
              className="cursor-pointer hover:text-violet-700 transition"
              key={index}
            >
              {property}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
