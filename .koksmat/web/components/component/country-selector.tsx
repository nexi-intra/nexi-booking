/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/5nCClPV9A9Z
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

import { useSQLSelect2 } from "@/app/koksmat/usesqlselect2";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
export interface Root {
  Result: Result[];
}

export interface Result {
  id: number;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  deleted_at: any;
  tenant: string;
  searchindex: string;
  name: string;
  description: any;
  code: string;
  flagurl: string;
  metadata: any;
}

export function CountrySelector() {
  const countries = useSQLSelect2<Result>(
    "nexi-booking.app",
    "SELECT * FROM country order by name asc"
  );

  return (
    <div className="flex space-x-4">
      <Card className="w-[300px] p-4 shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold">Choose Country</h3>
        </div>
        <div className="mt-4">
          <Select>
            <SelectTrigger id="country" aria-label="Country">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {countries.dataset.map((country) => {
                return (
                  <SelectItem key={country.id} value={country.code}>
                    {country.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </Card>
    </div>
  );
}
