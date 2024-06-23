CREATE TABLE public.site (
id SERIAL PRIMARY KEY,
created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP,
created_by VARCHAR COLLATE pg_catalog."default NOT NULL ",
updated_by VARCHAR COLLATE pg_catalog."default NOT NULL ",
tenant VARCHAR COLLATE pg_catalog."default" NOT NULL,
searchindex VARCHAR COLLATE pg_catalog."default" NOT NULL,
name VARCHAR COLLATE pg_catalog."default" NOT NULL,
description VARCHAR COLLATE pg_catalog."default",
code VARCHAR,country_id INTEGER,parkingenabled BOOLEAN,deskbookingenabled BOOLEAN
    
);
