"use client";
/*---
keep: false
---
# File have been automatically created. To prevent the file from getting overwritten
# Set the Front Matter property ´keep´ to ´true´ 

*/
import { useContext } from "react";
import { AppProvider } from "@/components/appcontextprovider";
import AppLeftRail from "@/components/appleftrail";
import AppTopMenu from "@/components/apptopmenu";
import { MagicboxContext } from "@/app/koksmat/magicbox-context";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Tracer from "@/app/koksmat/components/tracer";

import { leftRailApps } from "./navigation";
import { Navbar } from "@/components/component/navbar";
export default function Layout(props: { children: any }) {
  const { children } = props;
  const magicbox = useContext(MagicboxContext);
  if (!magicbox) {
    return <div>no magicbox</div>;
  }
  if (!magicbox.user) {
    return (
      <div className="flex h-screen">
        <div className="grow"></div>
        <div className="flex flex-col">
          <div className="grow"></div>
          <div>
            {" "}
            <Button
              onClick={async () => {
                const signedIn = await magicbox.signIn(["User.Read"], "");

                magicbox.refresh();
              }}
            >
              Sign In using Microsoft 365 account
            </Button>
          </div>
          <div className="grow"></div>
        </div>
        <div className="grow"></div>
      </div>
    );
  }
  return (
    <AppProvider>
      <div className="h-[100vh] w-full bg-[url('/Booking_15.png')] bg-cover dark:bg-[url('/Booking_black.png')] flex">
        <Navbar />
        <div className="flex w-full">
          <div className="pt-20 grow h-full">{children}</div>
          {magicbox.showTracer && (
            <div className="hidden md:block min-w-56 bg-slate-300 mt-20">
              <Tracer />
            </div>
          )}
        </div>
      </div>
    </AppProvider>
  );
}
