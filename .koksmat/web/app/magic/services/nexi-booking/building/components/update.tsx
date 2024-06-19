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
import {BuildingForm} from "./form";

import {BuildingItem} from "../applogic/model";
export default function UpdateBuilding(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<BuildingItem>(
      "nexi-booking.building",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const building = readResult.data;
    return (
      <div>{building && 
      <BuildingForm building={building} editmode="update"/>}
     
      </div>
    );
}
