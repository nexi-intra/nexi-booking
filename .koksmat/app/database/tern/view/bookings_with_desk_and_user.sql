CREATE VIEW view.bookings_with_desk_and_user AS
    SELECT 
        b.id AS booking_id, 
        b.fromdatetime, 
        b.todatetime,
        d.id AS desk_id, 
        d.name AS desk_name, 
        d.code AS desk_code,
        u.id AS user_id, 
        u.name AS user_name, 
        u.description AS user_description
    FROM 
        public.booking b
    JOIN 
        public.desk d ON b.desk_id = d.id
    JOIN 
        public.user u ON b.user_id = u.id;