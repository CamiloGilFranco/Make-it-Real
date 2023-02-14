const express = require("express");

const app = express();
const port = 8080;

const data = {
  message: "Curso encontrado satisfactoriamente",
  top: {
    version_top: 27,
    students: 10,
    names: [
      "Oscar",
      "Nicolas",
      "Jean",
      "Diego",
      "Camilo",
      "Michael",
      "Andres",
      "Sebastian",
    ],
  },
};

app.get("/my-first-endpoint", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
});

app.listen(port, () => {
  console.log("server running");
});
