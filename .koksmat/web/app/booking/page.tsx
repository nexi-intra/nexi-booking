"use client";

import SearchPerson from "@/app/magic/services/magic-people/person/components/search";
import { useRouter } from "next/navigation";
import { APPNAME } from "../global";
import { Dashboard } from "@/components/dashboard";

export default function Page() {
  const router = useRouter();
  return (
    <div className="space-x-2 h-[90vh]">
      <Dashboard />
    </div>
  );
}
