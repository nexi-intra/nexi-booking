"use client";

import { MagicboxContext } from "@/app/koksmat/magicbox-context";
import { run } from "@/app/koksmat/magicservices";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useContext } from "react";

export default function SetDefaultCountry() {
  const { toast } = useToast();
  const magicbox = useContext(MagicboxContext);
  return (
    <div>
      <Button
        onClick={async () => {
          toast({
            description: "Running...",
          });
          const request = {
            user_id: 1,
            country_id: 1,
          };
          const calledTimestamp = new Date();
          const servicename = "nexi-booking.app";
          const args = ["process", "user_setcountry", JSON.stringify(request)];
          const result = await run(servicename, args, "", 600, "x");
          magicbox.logServiceCall({
            calledTimestamp,
            responedTimestamp: new Date(),
            request: {
              args,
              body: "",
              channel: servicename,
              timeout: 600,
            },
            servicename,
            response: result,
            transactionId: "x",
          });
          if (result.hasError) {
            toast({
              variant: "destructive",
              description: result.errorMessage ?? "unknown error",
            });
          } else {
            toast({
              description: "Completed",
            });
          }
        }}
      >
        Set user country
      </Button>
    </div>
  );
}
