import express from "express";

const app = express();
app.use(express.json());

const users = [];

app.post("/users", (req, res) => {
  console.log(req);

  res.send("Ok, Posted");
});

app.get("/users", (req, res) => {
  res.send("Olá, Mundo!");
});

app.listen(3000);
