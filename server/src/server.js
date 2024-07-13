const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3001;

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("welcome to the express server");
});

app.get("/products", (req, res) => {
  res.send("product is required");
});

app.get("/res", (req, res) => {
  res.status(200).send({
    message: "server is ok",
  });
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
