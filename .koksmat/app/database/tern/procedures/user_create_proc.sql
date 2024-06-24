/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   


-- tomat sild

CREATE OR REPLACE PROCEDURE proc.create_user(
    p_actor_name VARCHAR,
    p_params JSONB,
    OUT p_id INTEGER
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_tenant VARCHAR COLLATE pg_catalog."default" ;
    v_searchindex VARCHAR COLLATE pg_catalog."default" ;
    v_name VARCHAR COLLATE pg_catalog."default" ;
    v_description VARCHAR COLLATE pg_catalog."default";
    v_homecountry_id INTEGER;
        v_audit_id integer;  -- Variable to hold the OUT parameter value
    p_auditlog_params jsonb;

BEGIN
    v_tenant := p_params->>'tenant';
    v_searchindex := p_params->>'searchindex';
    v_name := p_params->>'name';
    v_description := p_params->>'description';
    v_homecountry_id := p_params->>'homecountry_id';
         

    INSERT INTO public.user (
    id,
    created_at,
    updated_at,
        created_by, 
        updated_by, 
        tenant,
        searchindex,
        name,
        description,
        homecountry_id
    )
    VALUES (
        DEFAULT,
        DEFAULT,
        DEFAULT,
        p_actor_name, 
        p_actor_name,  -- Use the same value for updated_by
        v_tenant,
        v_searchindex,
        v_name,
        v_description,
        v_homecountry_id
    )
    RETURNING id INTO p_id;

       p_auditlog_params := jsonb_build_object(
        'tenant', '',
        'searchindex', '',
        'name', 'create_user',
        'status', 'success',
        'description', '',
        'action', 'create_user',
        'entity', 'user',
        'entityid', -1,
        'actor', p_actor_name,
        'metadata', p_params
    );

    -- Call the create_auditlog procedure
    CALL proc.create_auditlog(p_actor_name, p_auditlog_params, v_audit_id);
END;
$BODY$
;
