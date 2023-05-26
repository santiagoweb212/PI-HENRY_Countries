const { Country } = require("../db");
const axios = require("axios");
const getCountries = async () => {
  const dataCountriesSave = await axios("https://restcountries.com/v3.1/all");
  const countries = dataCountriesSave.data.map((country) => {
    return {
      id: country.cca3,
      name: country.name.common,
      flags: country.flags,
      continents: country.continents,
      capital: country.capital ? country.capital.join(",") : "no tiene",
      subregion: country.subregion || "no tiene",
      area: String(country.area),
      population: String(country.population),
    };
  });
  const createdCountries = await Country.bulkCreate(countries);
  console.log(`Se crearon ${createdCountries.length} países.`);
};

module.exports = getCountries;
