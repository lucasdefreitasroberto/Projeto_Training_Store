import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello World Teste" });
});

app.listen(3000);
