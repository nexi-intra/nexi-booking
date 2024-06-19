/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   


-- sure sild

CREATE TABLE public.restrictiongroup
(
    id SERIAL PRIMARY KEY,
    created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by character varying COLLATE pg_catalog."default"  ,

    updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_by character varying COLLATE pg_catalog."default" ,

    deleted_at timestamp with time zone
    ,tenant character varying COLLATE pg_catalog."default"  NOT NULL
    ,searchindex character varying COLLATE pg_catalog."default"  NOT NULL
    ,name character varying COLLATE pg_catalog."default"  NOT NULL
    ,description character varying COLLATE pg_catalog."default" 
    ,code character varying COLLATE pg_catalog."default"  NOT NULL


);

                -- lollipop
                CREATE TABLE public.restrictiongroup_m2m_desk (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                created_by character varying COLLATE pg_catalog."default"  ,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_by character varying COLLATE pg_catalog."default",
                deleted_at timestamp with time zone
                
                    ,restrictiongroup_id int  
 
                    ,desk_id int  
 

                );
            

                ALTER TABLE public.restrictiongroup_m2m_desk
                ADD FOREIGN KEY (restrictiongroup_id)
                REFERENCES public.restrictiongroup (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.restrictiongroup_m2m_desk
                ADD FOREIGN KEY (desk_id)
                REFERENCES public.desk (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;                -- lollipop
                CREATE TABLE public.restrictiongroup_m2m_user (
                id SERIAL PRIMARY KEY,
                created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                created_by character varying COLLATE pg_catalog."default"  ,
                updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
                updated_by character varying COLLATE pg_catalog."default",
                deleted_at timestamp with time zone
                
                    ,restrictiongroup_id int  
 
                    ,user_id int  
 

                );
            

                ALTER TABLE public.restrictiongroup_m2m_user
                ADD FOREIGN KEY (restrictiongroup_id)
                REFERENCES public.restrictiongroup (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;

                ALTER TABLE public.restrictiongroup_m2m_user
                ADD FOREIGN KEY (user_id)
                REFERENCES public.user (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION
                NOT VALID;


---- create above / drop below ----
DROP TABLE IF EXISTS public.restrictiongroup_m2m_desk;DROP TABLE IF EXISTS public.restrictiongroup_m2m_user;
DROP TABLE public.restrictiongroup;

