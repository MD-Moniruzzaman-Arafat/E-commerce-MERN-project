const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3001;

app.use(morgan("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extends: true }));

const isLogin = (req, res, next) => {
  const isLogin = true;
  if (isLogin) {
    req.body.id = 101;
    next();
  } else {
    res.status(401).json({ message: "please log in" });
  }
  console.log("user is login");
};

// app.use(isLogin);

app.get("/", (req, res) => {
  res.send("welcome to the express server");
});

app.get("/res", isLogin, (req, res) => {
  console.log(req.body.id);
  res.status(200).send({
    message: "server is ok",
  });
});

// client error handling middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "not found" });
});

app.listen(port, () => {
  console.log(`server is running http://localhost:${port}`);
});
