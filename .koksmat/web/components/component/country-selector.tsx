/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/5nCClPV9A9Z
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Card } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

export function CountrySelector() {
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
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
              <SelectItem value="de">Germany</SelectItem>
              <SelectItem value="fr">France</SelectItem>
              <SelectItem value="es">Spain</SelectItem>
              <SelectItem value="it">Italy</SelectItem>
              <SelectItem value="jp">Japan</SelectItem>
              <SelectItem value="cn">China</SelectItem>
              <SelectItem value="in">India</SelectItem>
              <SelectItem value="br">Brazil</SelectItem>
              <SelectItem value="za">South Africa</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>
    </div>
  )
}
