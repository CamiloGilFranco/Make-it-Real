const express = require("express");
const morgan = require("morgan");
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

app.use(morgan("tiny"));
app.use(express.json());

//Obtener todos los productos
app.get("/api/products", (req, res) => {
  res.json(data);
});

app.get("/info", (req, res) => {
  res.send(info);
});

app.get("/about", (req, res) => {
  res.json(personalInfo);
});

//Producto único por ID
app.get("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.find((p) => p.id == productId);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
});

//Eliminar producto por ID
app.delete("/api/products/:id", (req, res) => {
  const productId = req.params.id;
  const product = data.find((p) => p.id == productId);

  if (!product) {
    res.status(404).send("Product not found");
  } else {
    data.splice(product, 1);
    console.log(product);
    res.status(202).send(`Product number ${product.id} has been deleted`);
  }
});

//Agregar un producto
app.post("/api/products", (req, res) => {
  const newProduct = req.body;

  if (!newProduct.title || !newProduct.price) {
    return res.status(400).json({ error: "Title and price are required" });
  }

  const existingProduct = data.find((product) =>
    product.title === newProduct.title ? true : false
  );

  if (existingProduct) {
    return res.status(409).json({ error: "Title must be unique" });
  }

  const ids = data.map((product) => product.id);
  const findIndex = (arr) => {
    arr.sort((a, b) => a - b);
    arr.map((element) => parseInt(element));
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - 1 !== arr[i - 1]) {
        return arr[i] - 1;
      }
    }
    return arr[arr.length - 1] + 1;
  };

  newProduct.id = findIndex(ids);
  data.push(newProduct);
  res.status(201).json(newProduct);
});

app.listen(port, () => {
  console.log("server running");
});
