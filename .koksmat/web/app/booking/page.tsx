"use client";

import { useRouter } from "next/navigation";
import { APPNAME } from "../global";
import { Dashboard } from "@/components/dashboard";
import { CountrySelector } from "@/components/component/country-selector";
import { useContext, useEffect, useState } from "react";
import { useSQLSelect2 } from "../koksmat/usesqlselect2";
import Loader from "@/components/loader";
import { MagicboxContext } from "../koksmat/magicbox-context";

export interface HomeCountryProps {
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

function HomeCountryReroute(props: {
  upn: string;
  onNoCountry: () => void;
  onLoaded: () => void;
}) {
  const { upn } = props;
  const [isloading, setisloading] = useState(true);
  const router = useRouter();
  const country = useSQLSelect2<HomeCountryProps>(
    "nexi-booking.app",
    `SELECT c.* FROM public.user u JOIN public.country c ON u.homecountry_id = c.id WHERE u.name = '${upn}' `
  );

  useEffect(() => {
    if (country.isLoading) {
      return;
    } else {
      setisloading(false);
    }
    if (!country.dataset) return;
    if (country.dataset.length === 1) {
      router.push(`/booking/${country.dataset[0].code}`);
      return;
    } else props.onNoCountry();
  }, [country]);

  useEffect(() => {
    if (!isloading) {
      props.onLoaded();
    }
  }, [isloading]);

  return null;
}

export default function Page() {
  const [isLoading, setisLoading] = useState(true);
  const [noCountry, setnoCountry] = useState<boolean>(false);
  const magicbox = useContext(MagicboxContext);
  const { user } = magicbox;

  return (
    <div className="w-full  flex justify-center content-center ">
      <Loader loading={isLoading} />
      <HomeCountryReroute
        upn={user?.email!}
        onNoCountry={() => {
          // setnoCountry(true);
        }}
        onLoaded={() => {
          setisLoading(false);
        }}
      />
      {/* TODO: Make selector invisible when not needed */}
      <CountrySelector />
    </div>
  );
}
