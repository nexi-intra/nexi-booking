/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
"use client";
// piratos
import { useService } from "@/app/koksmat/useservice";
import { useState } from "react";
import {SiteForm} from "./form";

import {SiteItem} from "../applogic/model";
export default function UpdateSite(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<SiteItem>(
      "nexi-booking.site",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const site = readResult.data;
    return (
      <div>{site && 
      <SiteForm site={site} editmode="update"/>}
     
      </div>
    );
}
