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
       v_rows_updated INTEGER;
v_tenant VARCHAR COLLATE pg_catalog."default" ;
    v_searchindex VARCHAR COLLATE pg_catalog."default" ;
    v_name VARCHAR COLLATE pg_catalog."default" ;
    v_description VARCHAR COLLATE pg_catalog."default";
    v_code VARCHAR;
    v_country_id INTEGER;
    v_parkingenabled BOOLEAN;
    v_deskbookingenabled BOOLEAN;
        v_audit_id integer;  -- Variable to hold the OUT parameter value
    p_auditlog_params jsonb;

    
BEGIN
    v_id := p_params->>'id';
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

    GET DIAGNOSTICS v_rows_updated = ROW_COUNT;
    
    IF v_rows_updated < 1 THEN
        RAISE EXCEPTION 'No records updated. site ID % not found', v_id ;
    END IF;

           p_auditlog_params := jsonb_build_object(
        'tenant', '',
        'searchindex', '',
        'name', 'update_site',
        'status', 'success',
        'description', '',
        'action', 'update_site',
        'entity', 'site',
        'entityid', -1,
        'actor', p_actor_name,
        'metadata', p_params
    );
/*###MAGICAPP-START##
{
    "version": "v0.0.1",
    "action": "update",
    "input" : {
  "type": "object",
  "properties": {
   "id": { "type": "number" },
  
    "tenant": { "type": "string" },
    "searchindex": { "type": "string" },
    "name": { "type": "string" },
    "description": { "type": "string" },
    "code": { "type": "string" },
    "country_id": { "type": "number" },
    "parkingenabled": { "type": "boolean" },
    "deskbookingenabled": { "type": "boolean" }
}
    }

##MAGICAPP-END##*/
END;
$BODY$
;


