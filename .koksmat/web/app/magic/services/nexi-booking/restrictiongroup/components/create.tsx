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
    import {Restriction GroupForm} from "./form";
    
    import {Restriction GroupItem} from "../applogic/model";
    export default function CreateRestriction Group() {
       
        const restrictiongroup = {} as Restriction GroupItem;
        return (
          <div>{restrictiongroup && 
          <Restriction GroupForm restrictiongroup={restrictiongroup} editmode="create"/>}
         
          </div>
        );
    }
