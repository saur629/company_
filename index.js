const express = require("express");
require("./connection");
const path = require('path')
const ApiRoutes = require("./routes/app");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = 7000;

app.use(express.json());
app.use('/uploads' , express.static(path.join(process.cwd() , 'uploads')))

app.use("/api", ApiRoutes);

app.use("/api/contact", contactRoutes);


app.listen(PORT, () => {
  console.log(`server is  running on http://localhost:${PORT}`);
});
