import { createContext } from "react";
import { CountrySQL } from "../types/countrySQL";

export type BookingContextType = {
  countries: CountrySQL[];
};

export const BookingContext = createContext<BookingContextType>({
  countries: [],
});
