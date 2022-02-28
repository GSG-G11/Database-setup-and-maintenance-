const express = require("express");
const dbBuild = require("../database/config/build");
const users = require("./static");

const router = express.Router();

router.get(dbBuild);
router.get("/users", (req, res) => {
  res.json(users);
});

module.exports = router;
