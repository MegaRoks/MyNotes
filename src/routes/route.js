let router = require("express").Router();

router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome. We live on 8080"
  });
});

module.exports = router;
