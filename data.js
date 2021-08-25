if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const fetch = require("node-fetch");

const apiKey = process.env.API_KEY;

/**
 *
 * @param {String} location name of location to get the data of the same
 * @param {String} type type of ajax request which is either 'weather' or 'forecast'
 * @returns {Object} required data to be sent to the client
 */
const fetchData = async (location, type) => {
  const fetchURL = `https://community-open-weather-map.p.rapidapi.com/${type}?q=${location}&units=metric`;
  const fetchOptions = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  };
  const res = await fetch(fetchURL, fetchOptions);
  const data = await res.json();
  let convertedData;
  if (type === "weather") {
    convertedData = currentLocationDataConverter(data);
    return convertedData;
  } else if (type === "forecast") {
    convertedData = forecastDataConverted(data);
    return convertedData;
  }
};

const currentLocationDataConverter = (data) => {
  const newData = {
    icon: data.weather[0].icon,
    temperature: data.main.temp,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    visibility: data.visibility,
    windSpeed: data.wind.speed,
    windDir: data.wind.deg,
    date: data.dt,
    location: data.name,
  };

  return newData;
};

const forecastDataConverted = (data) => {
  const newData = {
    data: [
      {
        date: data.list[2].dt,
        minTemp: data.list[2].main.temp_min,
        maxTemp: data.list[2].main.temp_max,
        icon: data.list[2].weather[0].icon,
      },
      {
        date: data.list[10].dt,
        minTemp: data.list[10].main.temp_min,
        maxTemp: data.list[10].main.temp_max,
        icon: data.list[10].weather[0].icon,
      },
      {
        date: data.list[18].dt,
        minTemp: data.list[18].main.temp_min,
        maxTemp: data.list[18].main.temp_max,
        icon: data.list[18].weather[0].icon,
      },
      {
        date: data.list[26].dt,
        minTemp: data.list[26].main.temp_min,
        maxTemp: data.list[26].main.temp_max,
        icon: data.list[26].weather[0].icon,
      },
      {
        date: data.list[34].dt,
        minTemp: data.list[34].main.temp_min,
        maxTemp: data.list[34].main.temp_max,
        icon: data.list[34].weather[0].icon,
      },
    ],
  };
  return newData;
};

module.exports = fetchData;
