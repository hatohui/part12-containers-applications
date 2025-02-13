const express = require("express");
const router = express.Router();
const { added_todos } = require("./todos");

router.get("/", async (req, res) => {
  res.send({
    added_todos,
  });
});

module.exports = router;
