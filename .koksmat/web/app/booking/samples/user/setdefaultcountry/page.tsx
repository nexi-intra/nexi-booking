"use client";

import { https } from "@/app/koksmat/httphelper";
import { MagicboxContext } from "@/app/koksmat/magicbox-context";
import { run } from "@/app/koksmat/magicservices";
import Process from "@/app/koksmat/process";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useMsal, useAccount } from "@azure/msal-react";
import { useContext, useEffect, useState } from "react";
interface CaseProps {
  scopes: string[];
  title: string;
  testurl: string;
  token?: string;
}
const API: CaseProps = {
  scopes: ["User.Read"],
  title: "Read user profile",
  testurl: "https://graph.microsoft.com/v1.0/me",
};
export default function SetDefaultCountry() {
  //   const { toast } = useToast();
  //   const { instance, accounts, inProgress } = useMsal();
  //   const account = useAccount(accounts[0] || {});
  //   const [latestResponse, setlatestResponse] = useState<any>();
  //   const [token, settoken] = useState("");
  //   const [latestError, setlatestError] = useState<any>();

  //   const magicbox = useContext(MagicboxContext);
  //   const aquireToken = async (thisCase: CaseProps) => {
  //     setlatestError(undefined);
  //     setlatestResponse(undefined);
  //     if (account && thisCase) {
  //       try {
  //         const response = await instance.acquireTokenSilent({
  //           scopes: thisCase?.scopes ?? [],
  //           account: account,
  //         });
  //         thisCase.token = response.accessToken;
  //         settoken(response.accessToken);
  //         const getResponse = await https(
  //           response.accessToken,
  //           "GET",
  //           thisCase.testurl
  //         );
  //         setlatestResponse(getResponse);
  //       } catch (error) {
  //         try {
  //           const response = await instance.acquireTokenPopup({
  //             scopes: thisCase?.scopes ?? [],
  //             account: account,
  //           });
  //           thisCase.token = response.accessToken;
  //           settoken(response.accessToken);
  //           const getResponse = await https(
  //             response.accessToken,
  //             "GET",
  //             thisCase.testurl
  //           );
  //           setlatestResponse(getResponse);
  //         } catch (error) {
  //           setlatestError(error);
  //         }
  //       }
  //     }
  //   };

  //   useEffect(() => {
  //     aquireToken(API);
  //   }, []);
  const [running, setrunning] = useState(false);
  return (
    <div>
      <Button onClick={() => setrunning(true)}>Process</Button>
      {running && (
        <div>
          Processing:
          <Process
            servicename="nexi-booking.app"
            processname="user_setcountry"
            payload={{
              user_id: 1,
              country_id: 1,
            }}
          />
        </div>
      )}
      {/* <Button
        disabled={!token}
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
          const args = [
            "process",
            "user_setcountry",
            token,
            JSON.stringify(request),
          ];
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
      </Button> */}
    </div>
  );
}
