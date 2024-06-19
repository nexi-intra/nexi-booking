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
import {FloorForm} from "./form";

import {FloorItem} from "../applogic/model";
export default function UpdateFloor(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<FloorItem>(
      "nexi-booking.floor",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const floor = readResult.data;
    return (
      <div>{floor && 
      <FloorForm floor={floor} editmode="update"/>}
     
      </div>
    );
}
