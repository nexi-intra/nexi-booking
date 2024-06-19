    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
    "use client";
    import { useService } from "@/app/koksmat/useservice";
    import { useState } from "react";
    import {BookingForm} from "./form";
    
    import {BookingItem} from "../applogic/model";
    export default function CreateBooking() {
       
        const booking = {} as BookingItem;
        return (
          <div>{booking && 
          <BookingForm booking={booking} editmode="create"/>}
         
          </div>
        );
    }
