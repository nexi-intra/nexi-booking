    /* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/ 
"use client";
import { useState,useEffect } from "react";
import {SiteItem} from "../applogic/model";
import {SiteSchema} from "../applogic/model";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
/* marsbar */



export function SiteForm(props : {site: SiteItem,editmode:"create"|"update"}) {
    const {site,editmode} = props;
    function onSubmit(data: z.infer<typeof SiteSchema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }
    const form = useForm<z.infer<typeof SiteSchema>>({
        resolver: zodResolver(SiteSchema)
      })

      useEffect(() => {
        form.reset(site);
      }, [site]);
    return (
      <div>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
       
          
    {site && <div>
        {/* string */}<FormField
 control={form.control}
 name="name"
 render={({ field }) => (
   <FormItem>
     <FormLabel>Name</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* string */}<FormField
 control={form.control}
 name="description"
 render={({ field }) => (
   <FormItem>
     <FormLabel>Description</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* string */}<FormField
 control={form.control}
 name="code"
 render={({ field }) => (
   <FormItem>
     <FormLabel>code</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* reference */}<FormField
 control={form.control}
 name="country_id"
 render={({ field }) => (
   <FormItem>
     <FormLabel>country</FormLabel>
     <FormControl>
       <Input placeholder="" {...field} />

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* boolean */}<FormField
 control={form.control}
 name="parkingenabled"
 render={({ field }) => (
   <FormItem>
     <FormLabel>parkingenabled</FormLabel>
     <FormControl>
       <div>Boolean not implemented</div>

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>
    {/* boolean */}<FormField
 control={form.control}
 name="deskbookingenabled"
 render={({ field }) => (
   <FormItem>
     <FormLabel>deskbookingenabled</FormLabel>
     <FormControl>
       <div>Boolean not implemented</div>

     </FormControl>
     <FormDescription>
       
     </FormDescription>
     <FormMessage />
   </FormItem>
 )}
/>

    <div>
   
    </div>
    </div>}


      <Button  type="submit">{editmode === "create"?"Create":"Update"}</Button>
      </form>
     </Form>
      </div>
    );
  }
      
