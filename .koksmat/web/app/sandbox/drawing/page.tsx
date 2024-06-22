"use client";

import WorkspaceEditor from "@/components/workspaceeditor";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="space-x-2 h-[90vh] w-full">
      <WorkspaceEditor />
    </div>
  );
}
