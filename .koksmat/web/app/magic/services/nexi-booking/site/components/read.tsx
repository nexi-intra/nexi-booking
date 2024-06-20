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
import {SiteItem} from "../applogic/model";


/* yankiebar */

export default function ReadSite(props: { id: number }) {
    const { id } = props;
    const [transactionId, settransactionId] = useState(0);
    const readResult = useService<SiteItem>(
      "nexi-booking.site",
      ["read", id?.toString()],
      "",
      6000,
      transactionId.toString()
    );
    const site = readResult.data;
    return (
      <div>
          
    {site && <div>
        <div>
        <div className="font-bold" >Name</div>
        <div>{site.name}</div>
    </div>    <div>
        <div className="font-bold" >Description</div>
        <div>{site.description}</div>
    </div>    <div>
        <div className="font-bold" >code</div>
        <div>{site.code}</div>
    </div>    <div>
        <div className="font-bold" >country</div>
        <div>{site.country_id}</div>
    </div>    <div>
        <div className="font-bold" >parkingenabled</div>
        <div>{site.parkingenabled}</div>
    </div>    <div>
        <div className="font-bold" >deskbookingenabled</div>
        <div>{site.deskbookingenabled}</div>
    </div>
    <div>
        <div>
        <div className="font-bold" >id</div>
        <div>{site.id}</div>
    </div>
        <div>
        <div className="font-bold" >created_at</div>
        <div>{site.created_at}</div>
    </div>
        <div>
        <div className="font-bold" >created_by</div>
        <div>{site.created_by}</div>
    </div>
        <div>
        <div className="font-bold" >updated_at</div>
        <div>{site.updated_at}</div>
    </div>
        <div>
        <div className="font-bold" >updated_by</div>
        <div>{site.updated_by}</div>
    </div>
    </div>
    </div>}


     
      </div>
    );
  }
      
