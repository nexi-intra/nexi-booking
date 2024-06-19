    
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
// Floor
export interface FloorItem  {
    id: number;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
        name : string ;
    description : string ;
    code : string ;
    floorplan : string ;
    building_id : number ;

}


// Floor
export const FloorSchema = z.object({  
   
        name : z.string(), 
    description : z.string().optional(), 
    code : z.string(), 
    floorplan : z.string().optional(), 
    building_id : z.number(), 

});

