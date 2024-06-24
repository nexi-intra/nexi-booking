/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   


-- sherry sild

CREATE OR REPLACE PROCEDURE proc.update_auditlog(
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
    v_action VARCHAR;
    v_status VARCHAR;
    v_entity VARCHAR;
    v_entityid VARCHAR;
    v_actor VARCHAR;
    v_metadata JSONB;
        v_audit_id integer;  -- Variable to hold the OUT parameter value
    p_auditlog_params jsonb;

    
BEGIN
    v_tenant := p_params->>'tenant';
    v_searchindex := p_params->>'searchindex';
    v_name := p_params->>'name';
    v_description := p_params->>'description';
    v_action := p_params->>'action';
    v_status := p_params->>'status';
    v_entity := p_params->>'entity';
    v_entityid := p_params->>'entityid';
    v_actor := p_params->>'actor';
    v_metadata := p_params->>'metadata';
         
    
        
    UPDATE public.auditlog
    SET updated_by = p_actor_name,
        updated_at = CURRENT_TIMESTAMP,
        tenant = v_tenant,
        searchindex = v_searchindex,
        name = v_name,
        description = v_description,
        action = v_action,
        status = v_status,
        entity = v_entity,
        entityid = v_entityid,
        actor = v_actor,
        metadata = v_metadata
    WHERE id = v_id;


           p_auditlog_params := jsonb_build_object(
        'tenant', '',
        'searchindex', '',
        'name', 'update_auditlog',
        'status', 'success',
        'description', '',
        'action', 'update_auditlog',
        'entity', 'auditlog',
        'entityid', -1,
        'actor', p_actor_name,
        'metadata', p_params
    );
END;
$BODY$
;
