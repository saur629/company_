const express = require("express");
require("./connection");
const ApiRoutes = require("./routes/app");

const app = express();
const PORT = 7000;

app.use(express.json());

app.use("/api", ApiRoutes);

app.listen(PORT, () => {
  console.log(`server is  running on http://localhost:${PORT}`);
});
