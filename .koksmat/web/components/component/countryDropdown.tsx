"use client";
import React, { useContext, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown, GlobeIcon } from "lucide-react";
import { BookingContext } from "@/app/booking/context/bookingContext";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { CountrySQL } from "@/app/booking/types/countrySQL";

function CountryDropdown(props: { type: "small" | "large" }) {
  const { type } = props;
  const { countries } = useContext(BookingContext);
  const router = useRouter();
  const path = usePathname();
  const countryCode = path.split("/")[2];

  const [selectedCountry, setselectedCountry] = useState<
    CountrySQL | undefined
  >();

  useEffect(() => {
    if (countryCode && countries.length > 0) {
      const country = countries.find((country) => country.code === countryCode);
      if (country) setselectedCountry(country);
    }
  }, [countryCode, countries]);

  return (
    <>
      {countryCode && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild disabled={countries.length < 2}>
            <Button
              variant="outline"
              size={type == "small" ? "sm" : "lg"}
              className="bg-white bg-opacity-30 shadow-2xl backdrop-blur-xl dark:bg-slate-600 dark:bg-opacity-20 focus:border-none flex justify-between">
              <div className="flex flex-row items-center">
                {type == "small" && <GlobeIcon className="h-4 w-4" />}
                {type == "large" && (
                  <Image
                    className="mr-2 h-4 w-4"
                    width={4}
                    height={4}
                    src={selectedCountry?.flagurl!}
                    alt={"Flag of " + selectedCountry?.name}
                  />
                )}
                <span className="pl-1">
                  {type == "small"
                    ? selectedCountry?.code
                    : selectedCountry?.name}
                </span>
              </div>
              {type == "large" && <ChevronDown className="h-4 w-4 pl-2" />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="mt-3 bg-white bg-opacity-40 shadow-2xl backdrop-blur-xl dark:bg-slate-600 dark:bg-opacity-20 border-none">
            <DropdownMenuRadioGroup
              value={selectedCountry?.code}
              onValueChange={(value) => {
                setselectedCountry(
                  countries.find((country) => country.code === value)
                );
                router.push(`/booking/${value}`);
              }}>
              {countries?.map((country) => (
                <DropdownMenuRadioItem
                  value={country.code}
                  className="cursor-pointer">
                  <Image
                    className="mr-2 h-4 w-4"
                    width={4}
                    height={4}
                    src={country.flagurl}
                    alt={"Flag of " + country.name}
                  />
                  {country.name}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </>
  );
}

export default CountryDropdown;
