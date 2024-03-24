export interface GetGeoLocationR {
  ip_address: string;
  city: string;
  city_geoname_id: number;
  region: string;
  region_iso_code: string;
  region_geoname_id: number;
  country: string;
  country_code: string;
  country_geoname_id: number;
  country_is_eu: boolean;
  continent: string;
  continent_code: string;
  continent_geoname_id: number;
  longitude: number;
  latitude: number;
  security: Security;
  timezone: Timezone;
  flag: Flag;
  currency: Currency;
  connection: Connection;
}

export interface Security {
  is_vpn: boolean;
}

export interface Timezone {
  name: string;
  abbreviation: string;
  gmt_offset: number;
  current_time: string;
  is_dst: boolean;
}

export interface Flag {
  emoji: string;
  unicode: string;
  png: string;
  svg: string;
}

export interface Currency {
  currency_name: string;
  currency_code: string;
}

export interface Connection {
  autonomous_system_number: number;
  autonomous_system_organization: string;
  connection_type: string;
  isp_name: string;
}

export type CurrentLocation = {
  city: string;
  country: string;
  latitude: number;
  longitude: number;
};

export interface GeoapifyLocation {
  datasource: {
    sourcename: string;
    attribution: string;
    license: string;
    url: string;
  };
  country: string;
  country_code: string;
  state: string;
  city: string;
  lon: number;
  lat: number;
  result_type: string;
  formatted: string;
  address_line1: string;
  address_line2: string;
  category: string;
  timezone: {
    name: string;
    offset_STD: string;
    offset_STD_seconds: number;
    offset_DST: string;
    offset_DST_seconds: number;
    abbreviation_STD: string;
    abbreviation_DST: string;
  };
  plus_code: string;
  plus_code_short: string;
  rank: {
    importance: number;
    popularity: number;
    confidence: number;
    confidence_city_level: number;
    match_type: string;
  };
  place_id: string;
  bbox: {
    lon1: number;
    lat1: number;
    lon2: number;
    lat2: number;
  };
}
