    
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
// Booking
export interface BookingItem  {
    id: number;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
        name : string ;
    description : string ;
    desk_id : number ;
    user_id : number ;
    fromdatetime : string ;
    todatetime : string ;

}


// Booking
export const BookingSchema = z.object({  
   
        name : z.string(), 
    description : z.string().optional(), 
    desk_id : z.number(), 
    user_id : z.number(), 
    fromdatetime : z.string(), 
    todatetime : z.string(), 

});

