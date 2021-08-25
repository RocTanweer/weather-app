// Custom modules
const fetchData = require(`${__dirname}/data.js`);

// Built-in modules
const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT | 4000;

app.post("/weather", async (req, res) => {
  const location = req.body.location;
  const currentLocationData = await fetchData(location, "weather");
  const currentLocationForecastData = await fetchData(location, "forecast");
  res.json({ currentLocationData, currentLocationForecastData });
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
