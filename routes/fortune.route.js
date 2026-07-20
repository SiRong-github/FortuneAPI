const express = require("express");
const router = express.Router();
const { schema, idValidator } = require("../validators/validator.js");
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
router.get("/id/:id", idValidator, validateRequestSchema, getFortune);
router.get("/getRandomFortune", getRandomFortune);
router.get("/getNumFortunes", getNumFortunes);
router.post("/", schema, validateRequestSchema, createFortune);
router.put(
  "/id/:id",
  schema,
  idValidator,
  validateRequestSchema,
  updateFortune,
);
router.delete("/id/:id", idValidator, validateRequestSchema, deleteFortune);
module.exports = router;
