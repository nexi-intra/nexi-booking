CREATE VIEW view.restrictiongroups_with_desks AS
    SELECT 
        rg.id AS restrictiongroup_id, 
        rg.name AS restrictiongroup_name, 
        d.id AS desk_id, 
        d.name AS desk_name
    FROM 
        public.restrictiongroup rg
    JOIN 
        public.restrictiongroup_m2m_desk rgd ON rg.id = rgd.restrictiongroup_id
    JOIN 
        public.desk d ON rgd.desk_id = d.id;