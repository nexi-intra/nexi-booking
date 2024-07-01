"use client";
import { Navbar } from "@/components/component/navbar";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { BookingContext } from "../context/bookingContext";
import { CountrySQL } from "../types/countrySQL";

function Page() {
  const [currentCountry, setcurrentCountry] = useState<CountrySQL>();
  const path = usePathname();
  const countryCode = path.split("/")[2];
  const { countries } = useContext(BookingContext);

  useEffect(() => {
    if (countryCode && countries.length > 0) {
      const country = countries?.find((country) => country.code == countryCode);
      if (country) setcurrentCountry(country);
    }
  }, [countryCode, countries]);

  return (
    <div>
      <p>Current pathname: {countryCode}</p>
      <pre>{JSON.stringify(currentCountry, null, 2)}</pre>
    </div>
  );
}

export default Page;
