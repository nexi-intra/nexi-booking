/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: true
---
*/   


-- tomat sild

CREATE OR REPLACE PROCEDURE proc.user_setcountry(
    p_actor_name VARCHAR,
    p_params JSONB,
    OUT p_id INTEGER
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
   v_user_id INTEGER;
   v_homecountry_id INTEGER;
   v_rows_updated INTEGER;
       v_audit_id integer;  -- Variable to hold the OUT parameter value

    p_auditlog_params jsonb;
BEGIN
    v_user_id := p_params->>'user_id';   
    v_homecountry_id := p_params->>'country_id';  
    UPDATE public.user
    SET
        homecountry_id = v_homecountry_id,
        updated_at = NOW(),
        updated_by = p_actor_name
    WHERE id = v_user_id;

    GET DIAGNOSTICS v_rows_updated = ROW_COUNT;
    
    IF v_rows_updated < 1 THEN
        RAISE EXCEPTION 'No records updated. User ID % not found', v_user_id;
    END IF;

    -- Construct the JSONB parameter
    p_auditlog_params := jsonb_build_object(
        'tenant', '',
        'searchindex', '',
        'name', 'user_setcountry',
        'description', '',
        'action', 'user_setcountry',
        'entity', 'user',
        'entityid', v_user_id,
        'actor', p_actor_name,
        'metadata', p_params
    );

    -- Call the create_auditlog procedure
    CALL proc.create_auditlog(p_actor_name, p_auditlog_params, v_audit_id);

    -- Output the result
    RAISE NOTICE 'Audit log created with ID: %', v_audit_id;
    RAISE NOTICE 'User updated';





    p_id = -1;
END;
$BODY$
;    
