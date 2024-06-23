CREATE OR REPLACE FUNCTION sampledata.insert_nexi_group_buildings()
RETURNS void AS $$
DECLARE
    site_record RECORD;
    site_id INTEGER;
    building_id INTEGER;
    country_lookup_id INTEGER;
BEGIN
    FOR site_record IN
        SELECT
            country_code,
            office
        FROM (VALUES
            ('AT', 'Nexi Austria GmbH, Leobersdorf'),
            ('AT', 'PforCards, Vienna'),
            ('BE', 'Nexi Payments, Zaventem'),
            ('HR', 'Nexi Croatia, Zagreb'),
            ('CZ', 'Nexi Czech Republic, s.r.o., Prague'),
            ('DK', 'Nets, Ballerup'),
            ('DK', 'Dankort, Ballerup'),
            ('DK', 'e-Boks, Hellerup'),
            ('DK', 'NemID, Ballerup'),
            ('DK', 'Storebox, Østerbro'),
            ('DK', 'SignaturGruppen, Aarhus C'),
            ('EE', 'Nets, Tallinn'),
            ('FI', 'Nets, Helsinki'),
            ('FI', 'Nexi Digital Finland, Espoo'),
            ('FI', 'Checkout, Tampere'),
            ('FI', 'Paytrail, Jyväskylä'),
            ('DE', 'Nexi Germany GmbH, Eschborn - Köln - München'),
            ('DE', 'Ratepay, Berlin'),
            ('DE', 'Nexi Payments Zweigniederlassung Deutschland, Munich'),
            ('DE', 'Service Hub Zweigstelle Deutschland, Nuremberg'),
            ('GR', 'Nexi Payments Greece, Athens'),
            ('GR', 'Nexi Greece, Athens'),
            ('HU', 'Nexi Central Europe, a.s. Hungarian Branch, Budapest'),
            ('HU', 'Nets'),
            ('IT', 'Nexi Italy, Milan - Rome - Verona'),
            ('IT', 'SIApay, Milan'),
            ('LV', 'Nets, Riga'),
            ('LT', 'Nets, Tallinn'),
            ('NL', 'Nexi Payments, Utrecht'),
            ('NO', 'Nets, Oslo'),
            ('PL', 'Polskie ePłatności, Tajęcina'),
            ('PL', 'Przelewy24, Poznan'),
            ('PL', 'eCard, Warsaw'),
            ('PL', 'Nexi Payments, Warsaw'),
            ('RO', 'SIA Romania Payment Technologies, Bucharest'),
            ('RO', 'Nexi S.p.A. Milano Sucursala Bucuresti, Bucharest'),
            ('RS', 'Nexi RS d.o.o, Belgrade'),
            ('RS', 'Nets'),
            ('SK', 'Nexi Central Europe, Bratislava'),
            ('SK', 'Nets'),
            ('SE', 'Nets, Stockholm'),
            ('CH', 'Nexi Schweiz AG, Wallisellen, ZH - Glands, VD - Rivera, TI')
        ) AS t(country_code, office)
    LOOP
        SELECT id INTO country_lookup_id FROM public.country WHERE code = site_record.country_code;

        -- Lookup the site_id using the country_code and office name
        SELECT id INTO site_id FROM public.site WHERE country_id = country_lookup_id AND name = site_record.office;

        -- Insert the building
        EXECUTE format(
            'INSERT INTO public.building(id, created_at, created_by, updated_at, updated_by, deleted_at, tenant, searchindex, name, site_id,code)
             VALUES (DEFAULT, DEFAULT, '''', DEFAULT, '''', DEFAULT, '''', ''name:%s'', %L, %L,'''') RETURNING id;',
            site_record.office, site_record.office, site_id
        ) INTO building_id;

        -- Special case for 'Nets, Ballerup'
        IF site_record.office = 'Nets, Ballerup' THEN
            EXECUTE format(
                'INSERT INTO public.building(id, created_at, created_by, updated_at, updated_by, deleted_at, tenant, searchindex, name, site_id,code)
                 VALUES (DEFAULT, DEFAULT, '''', DEFAULT, '''', DEFAULT, '''', ''name:%s - Building 2'', %L, %L,'''') RETURNING id;',
                site_record.office, site_record.office, site_id
            ) INTO building_id;
        END IF;
    END LOOP;
END;
$$ LANGUAGE plpgsql;
