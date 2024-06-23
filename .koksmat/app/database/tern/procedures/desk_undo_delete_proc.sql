/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   

-- karry sild

CREATE OR REPLACE PROCEDURE proc.undo_delete_desk(
    p_actor_name VARCHAR,
    p_params JSONB
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_id INTEGER;
BEGIN
    v_tenant := p_params->>'tenant';
    v_searchindex := p_params->>'searchindex';
    v_name := p_params->>'name';
    v_description := p_params->>'description';
    v_code := p_params->>'code';
    v_floor_id := p_params->>'floor_id';
    v_metadata := p_params->>'metadata';
         
    
        
    UPDATE public.desk
    SET deleted_at = NULL,
        updated_at = CURRENT_TIMESTAMP,
        updated_by = p_actor_name
    WHERE id = v_id;
END;
$BODY$
;
