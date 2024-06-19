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
import {BuildingItem} from "../applogic/model";


/* yankiebar */

export default function ReadBuilding(props: { id: number }) {
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
      <div>
          
    {building && <div>
        <div>
        <div className="font-bold" >Name</div>
        <div>{building.name}</div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div>{building.description}</div>
    </div>    <div>
        <div className="font-bold" >code</div>
        <div>{building.code}</div>
    </div>    <div>
        <div className="font-bold" >site</div>
        <div>{building.site_id}</div>
    </div>
    <div>
        <div>
        <div className="font-bold" >id</div>
        <div>{building.id}</div>
    </div>
        <div>
        <div className="font-bold" >created_at</div>
        <div>{building.created_at}</div>
    </div>
        <div>
        <div className="font-bold" >created_by</div>
        <div>{building.created_by}</div>
    </div>
        <div>
        <div className="font-bold" >updated_at</div>
        <div>{building.updated_at}</div>
    </div>
        <div>
        <div className="font-bold" >updated_by</div>
        <div>{building.updated_by}</div>
    </div>
    </div>
    </div>}


     
      </div>
    );
  }
      
