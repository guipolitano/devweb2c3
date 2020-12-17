const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const uri =
  "mongodb+srv://admin:H197luqz1wb0NIZO@cluster0.s1dnu.mongodb.net/persons?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.use(cors());
  app.use(express.json());
  app.use("/api", routes);

  app.listen(3000, function () {
    console.log("Servidor rodando na porta 3000");
  });
});
