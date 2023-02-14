const express = require("express");
const app = express();
const port = 8080;

const data = require("./data.json");
const personalInfo = require("./personal_info.json");

let time = new Date();

let info = `
Our store has info for ${Object.keys(data).length} products 
<br>
<br>
${time}
`;

app.get("/api/products", (req, res) => {
  res.json(data);
});

app.get("/info", (req, res) => {
  res.send(info);
});

app.get("/about", (req, res) => {
  res.json(personalInfo);
});

app.listen(port, () => {
  console.log("server running");
});
