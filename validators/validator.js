const { body, param } = require("express-validator");
const Fortune = require("../models/fortune.model.js");

const schema = [
  body("content")
    .isLength({ min: 2, max: 500 })
    .withMessage("Content must be between 2 and 500 characters.")
    .custom(async (value) => {
      const fortune = await Fortune.findOne({ content: value });
      if (fortune != null) {
        return Promise.reject("Content is not unique.");
      }
      return true;
    }),
];

const idValidator = [param("id").isMongoId().withMessage("Invalid id.")];

module.exports = { schema, idValidator };
