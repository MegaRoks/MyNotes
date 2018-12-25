let express = require("express");
let app = express();
let port = process.env.PORT || 8080;
let apiRoutes = require("./routes/route");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let db = mongoose.connection;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/mynotes");

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("Hello. This server runs on ports 8080");
});

app.listen(port, () => {
  console.log("We are live on" + port);
});
