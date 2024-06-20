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
import {RestrictionGroupForm} from "./form";

import {RestrictionGroupItem} from "../applogic/model";
export default function UpdateRestrictionGroup(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<RestrictionGroupItem>(
      "nexi-booking.restrictiongroup",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const restrictiongroup = readResult.data;
    return (
      <div>{restrictiongroup && 
      <RestrictionGroupForm restrictiongroup={restrictiongroup} editmode="update"/>}
     
      </div>
    );
}
