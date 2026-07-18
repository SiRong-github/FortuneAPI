const mongoose = require("mongoose");
const FortuneSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Please enter fortune."],
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

const Fortune = mongoose.model("Fortune", FortuneSchema);
module.exports = Fortune;
