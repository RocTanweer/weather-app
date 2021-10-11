// Custom modules
const fetchData = require(`${__dirname}/data.js`);

// Built-in modules
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT | 4000;

app.post("/weather", async (req, res) => {
  const location = req.body.location;
  if (!location) return;
  console.log(location);
  // const currentLocationData = await fetchData(location, "weather");
  // const currentLocationForecastData = await fetchData(location, "forecast");
  const temporaryData = {
    currentLocationData: {
      icon: "09d",
      desc: "drizzle",
      temperature: 24,
      pressure: 1005,
      humidity: 84,
      visibility: 3251,
      windSpeed: 1.54,
      windDir: 149,
      date: 1633335095,
      location: "Patna",
    },
    currentLocationForecastData: {
      data: [
        {
          id: 1,
          date: 1633359600,
          minTemp: 29.7,
          maxTemp: 31.46,
          icon: "04d",
        },
        {
          id: 2,
          date: 1633446000,
          minTemp: 29.3,
          maxTemp: 29.3,
          icon: "02d",
        },
        {
          id: 3,
          date: 1633532400,
          minTemp: 30.22,
          maxTemp: 30.22,
          icon: "04d",
        },
        {
          id: 4,
          date: 1633618800,
          minTemp: 29.28,
          maxTemp: 29.28,
          icon: "01d",
        },
        {
          id: 5,
          date: 1633705200,
          minTemp: 28.97,
          maxTemp: 28.97,
          icon: "01d",
        },
      ],
    },
  };

  // res.json({ currentLocationData, currentLocationForecastData });
  res.json(temporaryData);
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
