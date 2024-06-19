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
import {DeskForm} from "./form";

import {DeskItem} from "../applogic/model";
export default function UpdateDesk(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<DeskItem>(
      "nexi-booking.desk",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const desk = readResult.data;
    return (
      <div>{desk && 
      <DeskForm desk={desk} editmode="update"/>}
     
      </div>
    );
}
