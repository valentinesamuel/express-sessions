const express = require("express");
const groceriesRoute = require("./routes/groceries");
const marketsRoute = require("./routes/markets");

const app = express();
app.use(express.json);
app.use(express.urlencoded);
app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

const PORT = 3001;

app.use("/api/v1/groceries", groceriesRoute);
app.use("/api/v1/markets", marketsRoute);

app.listen(PORT, () => {
  console.log("Running Express server on port 3001");
});
