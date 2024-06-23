/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   


-- krydder sild

CREATE OR REPLACE PROCEDURE proc.delete_booking(
    p_actor_name VARCHAR,
    p_params JSONB
)
LANGUAGE plpgsql
AS $BODY$
DECLARE
    v_id INTEGER;
    v_soft_delete BOOLEAN;
BEGIN
    v_tenant := p_params->>'tenant';
    v_searchindex := p_params->>'searchindex';
    v_name := p_params->>'name';
    v_description := p_params->>'description';
    v_desk_id := p_params->>'desk_id';
    v_user_id := p_params->>'user_id';
    v_fromdatetime := p_params->>'fromdatetime';
    v_todatetime := p_params->>'todatetime';
         
    
        
    IF v_soft_delete THEN
        UPDATE public.booking
        SET deleted_at = CURRENT_TIMESTAMP,
            updated_at = CURRENT_TIMESTAMP,
            updated_by = p_actor_name
        WHERE id = v_id;
    ELSE
        DELETE FROM public.booking
        WHERE id = v_id;
    END IF;
END;
$BODY$
;
