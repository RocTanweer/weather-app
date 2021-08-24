const giveFetchData = require(`${__dirname}/data.js`);

const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT | 4000;

app.post("/weather", async (req, res) => {
  const location = req.body.location;

  res.json(await giveFetchData(location));
});

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
