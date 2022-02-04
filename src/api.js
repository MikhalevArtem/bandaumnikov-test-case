export const BEER = new URL("https://random-data-api.com/api/beer/random_beer");
export const USER = new URL(
  "https://random-data-api.com/api/users/random_user"
);
export const GEOCODING = (lng, lat) => {
  return new URL(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${lng},${lat}.json?access_token=pk.eyJ1IjoidGVtaWsyNTAyIiwiYSI6ImNreXMwajVxbTA0dDEydm4xN21xZmFqZTQifQ.o0rPsoZ_eFVYQzI-xTea4A`
  );
};
