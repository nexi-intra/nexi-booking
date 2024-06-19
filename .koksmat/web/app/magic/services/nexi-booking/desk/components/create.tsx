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
    import {DeskForm} from "./form";
    
    import {DeskItem} from "../applogic/model";
    export default function CreateDesk() {
       
        const desk = {} as DeskItem;
        return (
          <div>{desk && 
          <DeskForm desk={desk} editmode="create"/>}
         
          </div>
        );
    }
