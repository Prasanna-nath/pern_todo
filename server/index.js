const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;
const todoRoutes = require("./routes");

//const { Pool } = require("pg");

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
