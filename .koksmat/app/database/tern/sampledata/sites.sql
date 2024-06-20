CREATE OR REPLACE FUNCTION sampledata.insert_nexi_group_sites()
RETURNS void AS $$
DECLARE
    site_record RECORD;
    country_id INTEGER;
BEGIN
    FOR site_record IN
        SELECT
            country_code,
            office,
            office_picture_url
        FROM (VALUES
            ('AT', 'Nexi Austria GmbH, Leobersdorf', 'https://example.com/pictures/nexi_austria_leobersdorf.png'),
            ('AT', 'PforCards, Vienna', 'https://example.com/pictures/pforcards_vienna.png'),
            ('BE', 'Nexi Payments, Zaventem', 'https://example.com/pictures/nexi_payments_zaventem.png'),
            ('HR', 'Nexi Croatia, Zagreb', 'https://example.com/pictures/nexi_croatia_zagreb.png'),
            ('CZ', 'Nexi Czech Republic, s.r.o., Prague', 'https://example.com/pictures/nexi_czech_prague.png'),
            ('DK', 'Nets, Ballerup', 'https://example.com/pictures/nets_ballerup.png'),
            ('DK', 'Dankort, Ballerup', 'https://example.com/pictures/dankort_ballerup.png'),
            ('DK', 'e-Boks, Hellerup', 'https://example.com/pictures/e_boks_hellerup.png'),
            ('DK', 'NemID, Ballerup', 'https://example.com/pictures/nemid_ballerup.png'),
            ('DK', 'Storebox, Østerbro', 'https://example.com/pictures/storebox_osterbro.png'),
            ('DK', 'SignaturGruppen, Aarhus C', 'https://example.com/pictures/signaturgruppen_aarhus_c.png'),
            ('EE', 'Nets, Tallinn', 'https://example.com/pictures/nets_tallinn.png'),
            ('FI', 'Nets, Helsinki', 'https://example.com/pictures/nets_helsinki.png'),
            ('FI', 'Nexi Digital Finland, Espoo', 'https://example.com/pictures/nexi_digital_espoo.png'),
            ('FI', 'Checkout, Tampere', 'https://example.com/pictures/checkout_tampere.png'),
            ('FI', 'Paytrail, Jyväskylä', 'https://example.com/pictures/paytrail_jyvaskyla.png'),
            ('DE', 'Nexi Germany GmbH, Eschborn - Köln - München', 'https://example.com/pictures/nexi_germany_eschborn.png'),
            ('DE', 'Ratepay, Berlin', 'https://example.com/pictures/ratepay_berlin.png'),
            ('DE', 'Nexi Payments Zweigniederlassung Deutschland, Munich', 'https://example.com/pictures/nexi_payments_munich.png'),
            ('DE', 'Service Hub Zweigstelle Deutschland, Nuremberg', 'https://example.com/pictures/service_hub_nuremberg.png'),
            ('GR', 'Nexi Payments Greece, Athens', 'https://example.com/pictures/nexi_payments_athens.png'),
            ('GR', 'Nexi Greece, Athens', 'https://example.com/pictures/nexi_greece_athens.png'),
            ('HU', 'Nexi Central Europe, a.s. Hungarian Branch, Budapest', 'https://example.com/pictures/nexi_hungarian_budapest.png'),
            ('HU', 'Nets', 'https://example.com/pictures/nets.png'),
            ('IT', 'Nexi Italy, Milan - Rome - Verona', 'https://example.com/pictures/nexi_italy_milan.png'),
            ('IT', 'SIApay, Milan', 'https://example.com/pictures/siapay_milan.png'),
            ('LV', 'Nets, Riga', 'https://example.com/pictures/nets_riga.png'),
            ('LT', 'Nets, Tallinn', 'https://example.com/pictures/nets_tallinn.png'),
            ('NL', 'Nexi Payments, Utrecht', 'https://example.com/pictures/nexi_payments_utrecht.png'),
            ('NO', 'Nets, Oslo', 'https://example.com/pictures/nets_oslo.png'),
            ('PL', 'Polskie ePłatności, Tajęcina', 'https://example.com/pictures/polskie_epłatności_tajęcina.png'),
            ('PL', 'Przelewy24, Poznan', 'https://example.com/pictures/przelewy24_poznan.png'),
            ('PL', 'eCard, Warsaw', 'https://example.com/pictures/ecard_warsaw.png'),
            ('PL', 'Nexi Payments, Warsaw', 'https://example.com/pictures/nexi_payments_warsaw.png'),
            ('RO', 'SIA Romania Payment Technologies, Bucharest', 'https://example.com/pictures/sia_romania_bucharest.png'),
            ('RO', 'Nexi S.p.A. Milano Sucursala Bucuresti, Bucharest', 'https://example.com/pictures/nexi_milano_bucharest.png'),
            ('RS', 'Nexi RS d.o.o, Belgrade', 'https://example.com/pictures/nexi_belgrade.png'),
            ('RS', 'Nets', 'https://example.com/pictures/nets.png'),
            ('SK', 'Nexi Central Europe, Bratislava', 'https://example.com/pictures/nexi_bratislava.png'),
            ('SK', 'Nets', 'https://example.com/pictures/nets.png'),
            ('SE', 'Nets, Stockholm', 'https://example.com/pictures/nets_stockholm.png'),
            ('CH', 'Nexi Schweiz AG, Wallisellen, ZH - Glands, VD - Rivera, TI', 'https://example.com/pictures/nexi_schweiz.png')
        ) AS t(country_code, office, office_picture_url)
    LOOP
        -- Lookup the country_id using the country_code
        SELECT id INTO country_id FROM public.country WHERE code = site_record.country_code;

        -- Insert the site with the country_id reference
        EXECUTE format(
            'INSERT INTO public.site(id, created_at, created_by, updated_at, updated_by, deleted_at, tenant, searchindex, name, country_id,code)
             VALUES (DEFAULT, DEFAULT, '''', DEFAULT, '''', DEFAULT, '''', ''name:%s'', %L, %L,'''');',
            site_record.office, site_record.office, country_id
        );
    END LOOP;
END;
$$ LANGUAGE plpgsql;
