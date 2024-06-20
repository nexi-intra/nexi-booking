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
    import {RestrictionGroupForm} from "./form";
    
    import {RestrictionGroupItem} from "../applogic/model";
    export default function CreateRestrictionGroup() {
       
        const restrictiongroup = {} as RestrictionGroupItem;
        return (
          <div>{restrictiongroup && 
          <RestrictionGroupForm restrictiongroup={restrictiongroup} editmode="create"/>}
         
          </div>
        );
    }
