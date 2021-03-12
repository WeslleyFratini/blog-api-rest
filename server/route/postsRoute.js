const express = require("express");
const router = express.Router();

router.get("/posts", async function (req, res) {
  res.json([
    {
      id: 1,
      title: "Rest API: Metódos",
      content: ".....",
      data: new Date(),
    },
  ]);
});
router.get("/posts/:id", async function (req, res) {});
router.posts("posts", async function (req, res) {});
router.put("posts/:id", async function (req, res) {});
router.delete("posts/:id", async function (req, res) {});

module.exports = router;
