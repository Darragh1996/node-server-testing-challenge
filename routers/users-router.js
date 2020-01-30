const router = require("express").Router();

const Users = require("../models/user-model");

router.get("/", (req, res) => {
  Users.findAll()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
