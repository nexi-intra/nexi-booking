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
    import {SiteForm} from "./form";
    
    import {SiteItem} from "../applogic/model";
    export default function CreateSite() {
       
        const site = {} as SiteItem;
        return (
          <div>{site && 
          <SiteForm site={site} editmode="create"/>}
         
          </div>
        );
    }
