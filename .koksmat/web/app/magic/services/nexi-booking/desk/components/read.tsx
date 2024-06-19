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
import {DeskItem} from "../applogic/model";


/* yankiebar */

export default function ReadDesk(props: { id: number }) {
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
      <div>
          
    {desk && <div>
        <div>
        <div className="font-bold" >Name</div>
        <div>{desk.name}</div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div>{desk.description}</div>
    </div>    <div>
        <div className="font-bold" >code</div>
        <div>{desk.code}</div>
    </div>    <div>
        <div className="font-bold" >floor</div>
        <div>{desk.floor_id}</div>
    </div>                <div>
                    <div className="font-bold" >metadata</div>
                    <div>{JSON.stringify(desk.metadata,null,2)}</div>
                </div>
    <div>
        <div>
        <div className="font-bold" >id</div>
        <div>{desk.id}</div>
    </div>
        <div>
        <div className="font-bold" >created_at</div>
        <div>{desk.created_at}</div>
    </div>
        <div>
        <div className="font-bold" >created_by</div>
        <div>{desk.created_by}</div>
    </div>
        <div>
        <div className="font-bold" >updated_at</div>
        <div>{desk.updated_at}</div>
    </div>
        <div>
        <div className="font-bold" >updated_by</div>
        <div>{desk.updated_by}</div>
    </div>
    </div>
    </div>}


     
      </div>
    );
  }
      
