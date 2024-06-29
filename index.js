const express = require('express');
const app = express();

app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 8000;   

console.log(process.env.PORT);

const routes = require("./routes/todo");
app.use("/api/v1", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const {dbconnect} = require("./config/database.js");
dbconnect();

app.get("/", (req, res) => {
    res.send("Hello World");
});