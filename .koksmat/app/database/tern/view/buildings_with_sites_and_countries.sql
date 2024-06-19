CREATE VIEW view.buildings_with_sites_and_countries AS
    SELECT 
        b.id AS building_id, 
        b.name AS building_name, 
        b.code AS building_code,
        s.id AS site_id, 
        s.name AS site_name, 
        s.code AS site_code,
        c.id AS country_id, 
        c.name AS country_name, 
        c.code AS country_code
    FROM 
        public.building b
    JOIN 
        public.site s ON b.site_id = s.id
    JOIN 
        public.country c ON s.country_id = c.id;