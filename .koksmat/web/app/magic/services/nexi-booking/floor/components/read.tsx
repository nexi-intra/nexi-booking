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
import {FloorItem} from "../applogic/model";


/* yankiebar */

export default function ReadFloor(props: { id: number }) {
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
      <div>
          
    {floor && <div>
        <div>
        <div className="font-bold" >Name</div>
        <div>{floor.name}</div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div>{floor.description}</div>
    </div>    <div>
        <div className="font-bold" >code</div>
        <div>{floor.code}</div>
    </div>    <div>
        <div className="font-bold" >floorplan</div>
        <div>{floor.floorplan}</div>
    </div>    <div>
        <div className="font-bold" >building</div>
        <div>{floor.building_id}</div>
    </div>
    <div>
        <div>
        <div className="font-bold" >id</div>
        <div>{floor.id}</div>
    </div>
        <div>
        <div className="font-bold" >created_at</div>
        <div>{floor.created_at}</div>
    </div>
        <div>
        <div className="font-bold" >created_by</div>
        <div>{floor.created_by}</div>
    </div>
        <div>
        <div className="font-bold" >updated_at</div>
        <div>{floor.updated_at}</div>
    </div>
        <div>
        <div className="font-bold" >updated_by</div>
        <div>{floor.updated_by}</div>
    </div>
    </div>
    </div>}


     
      </div>
    );
  }
      
