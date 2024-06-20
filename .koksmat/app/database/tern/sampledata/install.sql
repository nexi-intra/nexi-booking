DROP SCHEMA IF EXISTS "sampledata" cascade;
CREATE SCHEMA "sampledata";

{{ template "countries.sql".}}
