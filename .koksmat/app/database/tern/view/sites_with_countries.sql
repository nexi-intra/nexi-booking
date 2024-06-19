CREATE VIEW view.sites_with_countries AS
    SELECT 
        s.id AS site_id, 
        s.name AS site_name, 
        s.code AS site_code,
        c.id AS country_id, 
        c.name AS country_name, 
        c.code AS country_code
    FROM 
        public.site s
    JOIN 
        public.country c ON s.country_id = c.id;