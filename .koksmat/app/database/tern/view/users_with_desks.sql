CREATE VIEW view.users_with_desks AS
    SELECT 
        u.id AS user_id, 
        u.name AS user_name, 
        d.id AS desk_id, 
        d.name AS desk_name
    FROM 
        public.user u
    JOIN 
        public.user_m2m_desk umd ON u.id = umd.user_id
    JOIN 
        public.desk d ON umd.desk_id = d.id;