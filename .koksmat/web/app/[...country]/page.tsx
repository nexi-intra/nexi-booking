"use client";
import { Navbar } from "@/components/component/navbar";
import { usePathname } from "next/navigation";
import React from "react";

function Page() {
  const pathname = usePathname();
  return (
    <>
      <p>Current pathname: {pathname}</p>
    </>
  );
}

export default Page;
