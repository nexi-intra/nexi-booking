/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   


-- krydder sild

CREATE OR REPLACE PROCEDURE proc.delete_auditlog(
    p_actor_name VARCHAR,
    p_params JSONB
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_id INTEGER;
    v_hard BOOLEAN;
        v_audit_id integer;  -- Variable to hold the OUT parameter value
    p_auditlog_params jsonb;


BEGIN
    v_id := p_params->>'id';
    v_hard := p_params->>'hard';
  
    IF v_hard THEN
     DELETE FROM public.auditlog
        WHERE id = v_id;
       
    ELSE
        UPDATE public.auditlog
        SET deleted_at = CURRENT_TIMESTAMP,
            updated_at = CURRENT_TIMESTAMP,
            updated_by = p_actor_name
        WHERE id = v_id;
    END IF;
           p_auditlog_params := jsonb_build_object(
        'tenant', '',
        'searchindex', '',
        'name', 'delete_auditlog',
        'status', 'success',
        'description', '',
        'action', 'delete_auditlog',
        'entity', 'auditlog',
        'entityid', -1,
        'actor', p_actor_name,
        'metadata', p_params
    );
END;
$BODY$
;
