const path = require("path");
const express = require("express");
const data = require("./utils/data");
const map_token = require("./config");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "/html/index.html"));
});

app.get("/api/data", (req, res) => {
  const payload = { data, map_token };
  res.send(JSON.stringify(payload));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server is up on port" + PORT);
});
