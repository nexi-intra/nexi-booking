"use client";
/*---
keep: false
---
# File have been automatically created. To prevent the file from getting overwritten
# Set the Front Matter property ´keep´ to ´true´ 

*/
import { APPNAME } from "@/app/global";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    redirect("/" + APPNAME);
  }, []);

  return <div className="w-full  flex justify-center content-center "></div>;
}
