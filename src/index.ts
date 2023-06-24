import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello there! Api is working");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
