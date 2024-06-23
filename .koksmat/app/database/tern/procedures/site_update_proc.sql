/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   


-- sherry sild

CREATE OR REPLACE PROCEDURE proc.update_site(
    p_actor_name VARCHAR,
    p_params JSONB
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_id INTEGER;
    v_tenant VARCHAR COLLATE pg_catalog."default" ;
    v_searchindex VARCHAR COLLATE pg_catalog."default" ;
    v_name VARCHAR COLLATE pg_catalog."default" ;
    v_description VARCHAR COLLATE pg_catalog."default";
    v_code VARCHAR;
    v_country_id INTEGER;
    v_parkingenabled BOOLEAN;
    v_deskbookingenabled BOOLEAN;
BEGIN
    v_tenant := p_params->>'tenant';
    v_searchindex := p_params->>'searchindex';
    v_name := p_params->>'name';
    v_description := p_params->>'description';
    v_code := p_params->>'code';
    v_country_id := p_params->>'country_id';
    v_parkingenabled := p_params->>'parkingenabled';
    v_deskbookingenabled := p_params->>'deskbookingenabled';
         
    
        
    UPDATE public.site
    SET updated_by = p_actor_name,
        updated_at = CURRENT_TIMESTAMP,
        tenant = v_tenant,
        searchindex = v_searchindex,
        name = v_name,
        description = v_description,
        code = v_code,
        country_id = v_country_id,
        parkingenabled = v_parkingenabled,
        deskbookingenabled = v_deskbookingenabled
    WHERE id = v_id;
END;
$BODY$
;
