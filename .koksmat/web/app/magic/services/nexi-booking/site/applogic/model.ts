    
/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/       
"use client";
import { z } from "zod";
// spunk
// Site
export interface SiteItem  {
    id: number;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
        name : string ;
    description : string ;
    code : string ;
    country_id : number ;
    parkingenabled : boolean ;
    deskbookingenabled : boolean ;

}


// Site
export const SiteSchema = z.object({  
   
        name : z.string(), 
    description : z.string().optional(), 
    code : z.string(), 
    country_id : z.number(), 
    parkingenabled : z.boolean().optional(), 
    deskbookingenabled : z.boolean().optional(), 

});

