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
    import {FloorForm} from "./form";
    
    import {FloorItem} from "../applogic/model";
    export default function CreateFloor() {
       
        const floor = {} as FloorItem;
        return (
          <div>{floor && 
          <FloorForm floor={floor} editmode="create"/>}
         
          </div>
        );
    }
