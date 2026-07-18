const { ReturnDocument } = require("mongodb");
const Fortune = require("../models/fortune.model.js");

/** Gets a list of all fortunes */
const getFortunes = async (req, res) => {
  const fortunes = await Fortune.find({});
  res.status(200).json(fortunes);
};

/** Gets a fortune based on the provided id */
const getFortune = async (req, res) => {
  const fortune = await Fortune.findById(req.params.id);
  res.status(200).json(fortune);
};

/** Gets random fortune */
const getRandomFortune = async (req, res) => {
  const count = await Fortune.countDocuments();
  const randomInd = Math.floor(Math.random() * count);
  const fortune = Array.from(await Fortune.find({}))[randomInd];
  res.status(200).json(fortune);
};

/** Gets number of fortunes */
const getNumFortunes = async (req, res) => {
  const numFortunes = await Fortune.countDocuments();
  res.status(200).json(numFortunes);
};

/** Creates a fortune */
const createFortune = async (req, res) => {
  const fortune = await Fortune.create(req.body);
  res.status(201).json(fortune);
};

/* Updates a fortune */
const updateFortune = async (req, res) => {
  const fortune = await Fortune.findByIdAndUpdate(
    req.params.id,
    {
      content: req.body.content,
    },
    { ReturnDocument: "before" },
  );
  if (fortune == null) {
    return res.status(404).json({ message: "Fortune not found." });
  }
  const updatedFortune = await Fortune.findById(req.params.id);
  res
    .status(200)
    .json(`Fortune has now been updated to: ${updatedFortune.content}`);
};

/* Deletes a fortune based on the provided id */
const deleteFortune = async (req, res) => {
  const fortune = await Fortune.findByIdAndDelete(req.params.id);
  if (!fortune) {
    res.status(404).json({ message: "Fortune not found." });
  }
  res.status(204).json({ message: "Fortune with ${id} deleted successfully." });
};

module.exports = {
  getFortunes,
  getFortune,
  getRandomFortune,
  getNumFortunes,
  createFortune,
  updateFortune,
  deleteFortune,
};
