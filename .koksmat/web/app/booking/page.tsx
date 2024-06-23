"use client";

import { useRouter } from "next/navigation";
import { APPNAME } from "../global";
import { Dashboard } from "@/components/dashboard";
import { CountrySelector } from "@/components/component/country-selector";

export default function Page() {
  const router = useRouter();
  return (
    <div className="w-full  flex justify-center content-center ">
      <CountrySelector />
    </div>
  );
}
