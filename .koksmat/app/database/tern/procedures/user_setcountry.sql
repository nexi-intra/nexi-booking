/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
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
BEGIN
    v_user_id := p_params->>'user_id';   
    v_homecountry_id := p_params->>'country_id';  
    UPDATE public.user
    SET
        homecountry_id = v_homecountry_id
    WHERE id = v_user_id;

    GET DIAGNOSTICS v_rows_updated = ROW_COUNT;
    
    IF v_rows_updated < 1 THEN
        RAISE EXCEPTION 'No records updated. User ID % not found', v_user_id;
    END IF;
    p_id = -1;
END;
$BODY$
;    
