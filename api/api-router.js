const router = require("express").Router();

const userRouter = require("../routers/users-router");

router.use("/users", userRouter);

router.get("/", (req, res) => {
  res.json("server is up and running");
});

module.exports = router;
