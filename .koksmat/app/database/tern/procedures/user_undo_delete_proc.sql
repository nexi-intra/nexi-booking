/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   

-- karry sild

CREATE OR REPLACE PROCEDURE proc.undo_delete_user(
    p_actor_name VARCHAR,
    p_params JSONB
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_id INTEGER;
BEGIN
    v_id := p_params->>'id';
    
        
    UPDATE public.user
    SET deleted_at = NULL,
        updated_at = CURRENT_TIMESTAMP,
        updated_by = p_actor_name
    WHERE id = v_id;
END;
$BODY$
;
