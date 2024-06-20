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
import {RestrictionGroupItem} from "../applogic/model";


/* yankiebar */

export default function ReadRestrictionGroup(props: { id: number }) {
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
      <div>
          
    {restrictiongroup && <div>
        <div>
        <div className="font-bold" >Name</div>
        <div>{restrictiongroup.name}</div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div>{restrictiongroup.description}</div>
    </div>    <div>
        <div className="font-bold" >code</div>
        <div>{restrictiongroup.code}</div>
    </div>
    <div>
        <div>
        <div className="font-bold" >id</div>
        <div>{restrictiongroup.id}</div>
    </div>
        <div>
        <div className="font-bold" >created_at</div>
        <div>{restrictiongroup.created_at}</div>
    </div>
        <div>
        <div className="font-bold" >created_by</div>
        <div>{restrictiongroup.created_by}</div>
    </div>
        <div>
        <div className="font-bold" >updated_at</div>
        <div>{restrictiongroup.updated_at}</div>
    </div>
        <div>
        <div className="font-bold" >updated_by</div>
        <div>{restrictiongroup.updated_by}</div>
    </div>
    </div>
    </div>}


     
      </div>
    );
  }
      
