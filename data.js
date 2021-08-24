if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const apiKey = process.env.API_KEY;

const fetch = require("node-fetch");

const giveFetchData = async (location) => {
  const fetchURL = `https://community-open-weather-map.p.rapidapi.com/weather?q=${location}&units=metric`;
  const fetchOptions = {
    method: "GET",
    headers: {
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": apiKey,
    },
  };
  const res = await fetch(fetchURL, fetchOptions);
  const data = await res.json();
  const convertedData = currentLocationDataConverter(data);
  return convertedData;
};

const currentLocationDataConverter = (data) => {
  const newData = {
    description: data.weather.description,
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

module.exports = giveFetchData;
