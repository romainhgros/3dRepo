// This map only contains the nationalities handled by ramdomusers
const isoCountries = new Map([
  ["AU", "Australia"],
  ["BR", "Brazil"],
  ["CA", "Canada"],
  ["CH", "Switzerland"],
  ["DE", "Germany"],
  ["DK", "Denmark"],
  ["ES", "Spain"],
  ["FI", "Finland"],
  ["FR", "France"],
  ["GB", "United Kingdom"],
  ["US", "United States"],
  ["IE", "Ireland"],
  ["NO", "Norway"],
  ["NL", "Netherlands"],
  ["NZ", "New Zealand"],
  ["TR", "Turkey"],
  ["IR", "Iran, Islamic Republic Of"],
]);

export function getCountryName(countryCode: string) {
  return isoCountries.get(countryCode) !== undefined
    ? isoCountries.get(countryCode)
    : countryCode;
}
