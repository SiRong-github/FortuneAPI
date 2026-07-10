const mongoose = require("mongoose");
const FortuneSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: [true, "Please enter id."],
      default: 0,
    },
    content: {
      type: String,
      required: [true, "Please enter fortune."],
    },
  },
  {
    timestamps: true,
  },
);

const Fortune = mongoose.model("Fortune", FortuneSchema);
module.exports = Fortune;
