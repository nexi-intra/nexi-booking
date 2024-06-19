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
import {BookingForm} from "./form";

import {BookingItem} from "../applogic/model";
export default function UpdateBooking(props: { id: number }) {
    const { id } = props;
 
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<BookingItem>(
      "nexi-booking.booking",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const booking = readResult.data;
    return (
      <div>{booking && 
      <BookingForm booking={booking} editmode="update"/>}
     
      </div>
    );
}
