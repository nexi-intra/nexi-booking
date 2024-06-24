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
    v_hard BOOLEAN;
BEGIN
    v_id := p_params->>'id';
    v_hard := p_params->>'hard';
  
    IF v_hard THEN
     DELETE FROM public.booking
        WHERE id = v_id;
       
    ELSE
        UPDATE public.booking
        SET deleted_at = CURRENT_TIMESTAMP,
            updated_at = CURRENT_TIMESTAMP,
            updated_by = p_actor_name
        WHERE id = v_id;
    END IF;
END;
$BODY$
;
