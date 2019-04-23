const express = require("express");

const app = express();

const logMiddleware = (req, res, next) => {
  console.log(
    `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
  );
  req.appName = "GoNode";

  return next();
};

app.use(logMiddleware);

app.get("/", (req, res) => {
  return res.send(`Bem vindo ao ${req.appName}`);
});

app.get("/name/:name", (req, res) => {
  return res.send(`Seja bem vindo ${req.params.name}`);
});

app.listen(3000);
