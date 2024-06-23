CREATE OR REPLACE FUNCTION sampledata.insert_nexi_group_offices()
    RETURNS void
    AS $$
DECLARE
    country_record RECORD;
BEGIN
    FOR country_record IN
    SELECT
        country,
        country_code,
        flag_url
    FROM (
        VALUES ('Austria', 'AT', 'https://flagcdn.com/w320/at.png'),
('Belgium', 'BE', 'https://flagcdn.com/w320/be.png'),
('Croatia', 'HR', 'https://flagcdn.com/w320/hr.png'),
('Czech Republic', 'CZ', 'https://flagcdn.com/w320/cz.png'),
('Denmark', 'DK', 'https://flagcdn.com/w320/dk.png'),
('Estonia', 'EE', 'https://flagcdn.com/w320/ee.png'),
('Finland', 'FI', 'https://flagcdn.com/w320/fi.png'),
('Germany', 'DE', 'https://flagcdn.com/w320/de.png'),
('Greece', 'GR', 'https://flagcdn.com/w320/gr.png'),
('Hungary', 'HU', 'https://flagcdn.com/w320/hu.png'),
('Italy', 'IT', 'https://flagcdn.com/w320/it.png'),
('Latvia', 'LV', 'https://flagcdn.com/w320/lv.png'),
('Lithuania', 'LT', 'https://flagcdn.com/w320/lt.png'),
('Netherlands', 'NL', 'https://flagcdn.com/w320/nl.png'),
('Norway', 'NO', 'https://flagcdn.com/w320/no.png'),
('Poland', 'PL', 'https://flagcdn.com/w320/pl.png'),
('Romania', 'RO', 'https://flagcdn.com/w320/ro.png'),
('Serbia', 'RS', 'https://flagcdn.com/w320/rs.png'),
('Slovakia', 'SK', 'https://flagcdn.com/w320/sk.png'),
('Sweden', 'SE', 'https://flagcdn.com/w320/se.png'),
('Switzerland', 'CH', 'https://flagcdn.com/w320/ch.png')) AS t(country, country_code, flag_url)
        LOOP
            EXECUTE format('INSERT INTO public.country(id, created_at, created_by, updated_at, updated_by, deleted_at, tenant, searchindex, name, code, flagurl)
             VALUES (DEFAULT, DEFAULT, '''', DEFAULT, '''', DEFAULT, '''', ''name:%s'', %L, %L, %L);', country_record.country, country_record.country, country_record.country_code, country_record.flag_url);
    END LOOP;
END;
$$
LANGUAGE plpgsql;

