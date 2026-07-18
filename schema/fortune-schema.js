const { body } = require("express-validator");
const Fortune = require("../models/fortune.model.js");

const schema = [
  body("content")
    .notEmpty()
    .withMessage("Content is required.")
    .isLength({ min: 2, max: 500 })
    .withMessage("Content must be between 2 and 500 characters.")
    .custom(async (value) => {
      const fortune = await Fortune.findOne({ content: value });
      if (fortune != null) {
        return Promise.reject("Content is not unique.");
      } else {
        console.log("content false: ", fortune);
      }
    }),
];

module.exports = { schema };
