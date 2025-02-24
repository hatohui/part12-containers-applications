const express = require("express");
const router = express.Router();
const { getAsync } = require("../redis/index");

router.get("/", async (req, res) => {
  const added_todos = Number(await getAsync("added_todos")) || 0;
  const state = {
    added_todos,
  };
  res.send(state);
});

module.exports = { router };
