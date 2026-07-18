const express = require("express");
const router = express.Router();
const { schema } = require("../schema/fortune-schema.js");
const {
  validateRequestSchema,
} = require("../middleware/validate-request-schema.js");

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
router.get("/id/:id", getFortune);
router.get("/getRandomFortune", getRandomFortune);
router.get("/getNumFortunes", getNumFortunes);
router.post("/", schema, validateRequestSchema, createFortune);
router.put("/id/:id", schema, validateRequestSchema, updateFortune);
router.delete("/:id", deleteFortune);
module.exports = router;
