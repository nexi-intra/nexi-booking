DROP SCHEMA IF EXISTS "view"
-- cascade;
CREATE SCHEMA "view";

{{ TEMPLATE "sites_with_countries.sql".}}
