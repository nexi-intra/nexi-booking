/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   


-- sherry sild

CREATE OR REPLACE PROCEDURE proc.update_booking(
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
    v_desk_id INTEGER;
    v_user_id INTEGER;
    v_fromdatetime TIMESTAMP WITH TIME ZONE;
    v_todatetime TIMESTAMP WITH TIME ZONE;
        v_audit_id integer;  -- Variable to hold the OUT parameter value
    p_auditlog_params jsonb;

    
BEGIN
    v_tenant := p_params->>'tenant';
    v_searchindex := p_params->>'searchindex';
    v_name := p_params->>'name';
    v_description := p_params->>'description';
    v_desk_id := p_params->>'desk_id';
    v_user_id := p_params->>'user_id';
    v_fromdatetime := p_params->>'fromdatetime';
    v_todatetime := p_params->>'todatetime';
         
    
        
    UPDATE public.booking
    SET updated_by = p_actor_name,
        updated_at = CURRENT_TIMESTAMP,
        tenant = v_tenant,
        searchindex = v_searchindex,
        name = v_name,
        description = v_description,
        desk_id = v_desk_id,
        user_id = v_user_id,
        fromdatetime = v_fromdatetime,
        todatetime = v_todatetime
    WHERE id = v_id;


           p_auditlog_params := jsonb_build_object(
        'tenant', '',
        'searchindex', '',
        'name', 'update_booking',
        'status', 'success',
        'description', '',
        'action', 'update_booking',
        'entity', 'booking',
        'entityid', -1,
        'actor', p_actor_name,
        'metadata', p_params
    );
END;
$BODY$
;
