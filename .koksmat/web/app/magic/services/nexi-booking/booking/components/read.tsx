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
import {BookingItem} from "../applogic/model";


/* yankiebar */

export default function ReadBooking(props: { id: number }) {
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
      <div>
          
    {booking && <div>
        <div>
        <div className="font-bold" >Name</div>
        <div>{booking.name}</div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div>{booking.description}</div>
    </div>    <div>
        <div className="font-bold" >desk</div>
        <div>{booking.desk_id}</div>
    </div>    <div>
        <div className="font-bold" >user</div>
        <div>{booking.user_id}</div>
    </div>    <div>
        <div className="font-bold" >fromdatetime</div>
        <div>{booking.fromdatetime}</div>
    </div>    <div>
        <div className="font-bold" >todatetime</div>
        <div>{booking.todatetime}</div>
    </div>
    <div>
        <div>
        <div className="font-bold" >id</div>
        <div>{booking.id}</div>
    </div>
        <div>
        <div className="font-bold" >created_at</div>
        <div>{booking.created_at}</div>
    </div>
        <div>
        <div className="font-bold" >created_by</div>
        <div>{booking.created_by}</div>
    </div>
        <div>
        <div className="font-bold" >updated_at</div>
        <div>{booking.updated_at}</div>
    </div>
        <div>
        <div className="font-bold" >updated_by</div>
        <div>{booking.updated_by}</div>
    </div>
    </div>
    </div>}


     
      </div>
    );
  }
      
