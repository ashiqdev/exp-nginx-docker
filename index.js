const express = require("express");
const app = express();
const port = 3000;

app.set("trust proxy", true);

app.get("/", (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
// var ip = (req.headers['x-forwarded-for'] || req.connection.remoteAddress || '').split(',')[0].trim();

  res.json({ message: ip });
});

app.listen(port, "0.0.0.0", () =>
  console.log(`Server listening at http://localhost:${port}`)
);
