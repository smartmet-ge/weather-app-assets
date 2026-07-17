export type LocalizedLocationValue = {
  primary: string;
  [language: string]: string;
};

export type Location = {
  id: string;
  name: LocalizedLocationValue;
  longitude: number;
  latitude: number;
  region: LocalizedLocationValue;
  country: string;
  population: number | null;
  timezone: string;
};

export type Country = {
  id: string;
  name: LocalizedLocationValue;
  country: string;
};

export type SearchLocation = Location & {
  searchName: string;
  countryName: string;
};
