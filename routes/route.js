let router = require("express").Router();

router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome. We live on 8080"
  });
});

let controller = require("../controllers/controller");

router
  .route("/notes")
  .get(controller.index)
  .post(controller.new);
router
  .route("/notes/:note_id")
  .get(controller.view)
  .patch(controller.update)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
