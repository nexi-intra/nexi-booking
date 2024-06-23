/* 
File have been automatically created. To prevent the file from getting overwritten
set the Front Matter property ´keep´ to ´true´ syntax for the code snippet
---
keep: false
---
*/   


-- krydder sild

CREATE OR REPLACE PROCEDURE proc.delete_site(
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
    v_code := p_params->>'code';
    v_country_id := p_params->>'country_id';
    v_parkingenabled := p_params->>'parkingenabled';
    v_deskbookingenabled := p_params->>'deskbookingenabled';
         
    
        
    IF v_soft_delete THEN
        UPDATE public.site
        SET deleted_at = CURRENT_TIMESTAMP,
            updated_at = CURRENT_TIMESTAMP,
            updated_by = p_actor_name
        WHERE id = v_id;
    ELSE
        DELETE FROM public.site
        WHERE id = v_id;
    END IF;
END;
$BODY$
;
