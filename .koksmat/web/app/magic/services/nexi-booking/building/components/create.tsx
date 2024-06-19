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
    import {BuildingForm} from "./form";
    
    import {BuildingItem} from "../applogic/model";
    export default function CreateBuilding() {
       
        const building = {} as BuildingItem;
        return (
          <div>{building && 
          <BuildingForm building={building} editmode="create"/>}
         
          </div>
        );
    }
