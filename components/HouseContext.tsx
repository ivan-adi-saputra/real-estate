"use client";
import { housesData } from "@/const/data";
import { NextPage } from "next";
import React, { createContext, useEffect, useState } from "react";

// create context
export const HouseContext = createContext<HouseContextType>({
  country: "",
  setCountry: () => {},
  countries: [],
  property: "",
  setProperty: () => {},
  properties: [],
  price: "",
  setPrice: () => {},
  loading: false,
  houses: [],
  handleClick: () => {},
});

interface Props {
  children: React.ReactNode;
}

interface HouseContextType {
  country: string;
  setCountry: React.Dispatch<React.SetStateAction<string>>;
  countries: string[];
  property: string;
  setProperty: React.Dispatch<React.SetStateAction<string>>;
  properties: string[];
  price: string;
  setPrice: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  houses: any[];
  handleClick: any;
}

const HouseContextProvider: NextPage<Props> = ({ children }) => {
  const [houses, setHouses] = useState<any[]>(housesData);
  const [country, setCountry] = useState<string>("Location (any)");
  const [countries, setCountries] = useState<string[]>([]);
  const [property, setProperty] = useState<string>("Property type (any)");
  const [properties, setProperties] = useState<string[]>([]);
  const [price, setPrice] = useState<string>("Price range (any)");
  const [loading, setLoading] = useState<boolean>(false);

  // return all countries
  useEffect(() => {
    const allCountries: string[] = houses.map((house) => {
      return house.country;
    });

    // remove duplicates
    const uniqueCountries: string[] = [
      "Location (any)",
      ...new Set(allCountries),
    ];

    // set countries
    setCountries(uniqueCountries);
  }, []);

  // return all properties
  useEffect(() => {
    const allProperties: string[] = houses.map((house) => {
      return house.type;
    });

    // remove duplicates
    const uniqueProperties: string[] = [
      "Property type (any)",
      ...new Set(allProperties),
    ];

    // set countries
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    //
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        loading,
        houses,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
