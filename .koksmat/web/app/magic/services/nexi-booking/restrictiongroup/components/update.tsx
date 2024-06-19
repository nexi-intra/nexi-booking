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
import {Restriction GroupForm} from "./form";

import {Restriction GroupItem} from "../applogic/model";
export default function UpdateRestriction Group(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<Restriction GroupItem>(
      "nexi-booking.restrictiongroup",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const restrictiongroup = readResult.data;
    return (
      <div>{restrictiongroup && 
      <Restriction GroupForm restrictiongroup={restrictiongroup} editmode="update"/>}
     
      </div>
    );
}
