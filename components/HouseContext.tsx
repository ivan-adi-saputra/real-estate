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
    // set loading
    setLoading(true);

    const isDefault = (str: string) => {
      return str.split(" ").includes("(any)");
    };

    // get min & max price
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // filter house
      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }

      // default house
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }

      // if country is not default
      if (!isDefault(country) && isDefault(property) && isDefault(price)) {
        return house.country === country;
      }

      // if property is not default
      if (!isDefault(property) && isDefault(country) && isDefault(price)) {
        return house.type === property;
      }

      // if price is not default
      if (!isDefault(price) && isDefault(country) && isDefault(property)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house;
        }
      }

      // if country & property is not default
      if (!isDefault(country) && !isDefault(property) && isDefault(price)) {
        return house.country === country && house.type === property;
      }

      // if country & price is not default
      if (!isDefault(country) && isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.country === country;
        }
      }

      // if price & property is not default
      if (isDefault(country) && !isDefault(property) && !isDefault(price)) {
        if (housePrice >= minPrice && housePrice <= maxPrice) {
          return house.type === property;
        }
      }
    });

    setTimeout(() => {
      return (
        newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
        setLoading(false)
      );
    }, 1000);
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
