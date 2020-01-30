const router = require("express").Router();

router.get("/", (req, res) => {
  res.json("server is up and running");
});

module.exports = router;
