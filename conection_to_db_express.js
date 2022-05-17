const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")
const bodyParser = require('body-parser')
const { redirect } = require('express/lib/response')

const app = express();
const port = 3001
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/arquitectura_web',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () { console.log("Connected successfully"); });

// Puerto de escucha
app.use(Router);

app.listen(port, () => {
    console.log(`Trabajo práctico de Arquitectua Web, escucha de puerto: ${port}`)
})