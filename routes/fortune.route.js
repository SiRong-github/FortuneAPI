const express = require("express");
const router = express.Router();
const {
  getFortunes,
  getFortune,
  getRandomFortune,
  getNumFortunes,
  createFortune,
  updateFortune,
  deleteFortune,
} = require("../controllers/fortune.controller.js");

router.get("/", getFortunes);
router.get("/:id", getFortune);
router.get("/getRandom", getRandomFortune);
router.get("/getNumFortunes", getNumFortunes);
router.post("/", createFortune);
router.put("/", updateFortune);
router.delete("/:id", deleteFortune);

module.exports = router;
