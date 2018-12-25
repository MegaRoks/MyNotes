let express = require("express");
let app = express();
let port = process.env.PORT || 8080;
let apiRoutes = require ("./src/routes/route")

app.use ('/api', apiRoutes)

app.get("/", (req, res) => {
  res.send("Hello World with Express");
});

app.listen(port, () => {
  console.log("We are live on" + port);
});
