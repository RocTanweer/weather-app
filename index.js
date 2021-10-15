// Custom modules
const fetchData = require(`${__dirname}/data.js`);

// Built-in modules
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT | 4000;

app.post("/weather", async (req, res) => {
  const location = req.body.location;
  if (!location) return;
  console.log(location);
  const currentLocationData = await fetchData(location, "weather");
  const currentLocationForecastData = await fetchData(location, "forecast");

  res.json({ currentLocationData, currentLocationForecastData });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
