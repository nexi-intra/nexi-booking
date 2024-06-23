DROP SCHEMA IF EXISTS "sampledata" cascade;
CREATE SCHEMA "sampledata";

{{ template "countries.sql".}}
{{ template "sites.sql".}}
{{ template "buildings.sql".}}
{{ template "floors.sql".}}
