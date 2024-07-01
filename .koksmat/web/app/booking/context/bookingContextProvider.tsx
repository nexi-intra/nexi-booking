"use client";

import { useEffect, useState } from "react";
import { BookingContext, BookingContextType } from "./bookingContext";
import { useSQLSelect2 } from "@/app/koksmat/usesqlselect2";
import { CountrySQL } from "../types/countrySQL";

type Props = {
  children?: React.ReactNode;
};

export const BookingContextProvider = ({ children }: Props) => {
  const [contextValues, setcontextValues] = useState<BookingContextType>({
    countries: [],
  });

  const countries = useSQLSelect2<CountrySQL>(
    "nexi-booking.app",
    "SELECT * FROM country order by name asc"
  );

  useEffect(() => {
    // debugger;
    if (countries.dataset.length > 0 && contextValues.countries.length === 0) {
      setcontextValues({ countries: countries.dataset });
    }
  }, [countries]);

  return (
    <BookingContext.Provider value={contextValues}>
      {children}
    </BookingContext.Provider>
  );
};
