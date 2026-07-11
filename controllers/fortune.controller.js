const Fortune = require("../models/fortune.model.js");

/** Gets a list of all fortunes */
const getFortunes = async (req, res) => {
  try {
    const fortunes = await Fortune.find({});
    res.status(200).json(fortunes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/** Gets a fortune based on the provided id */
const getFortune = async (req, res) => {
  try {
    const { id } = req.params;
    const fortune = await Fortune.find({ id: id });
    res.status(200).json(fortune);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/** Gets random fortune */
const getRandomFortune = async (req, res) => {
  try {
    const count = await Fortune.countDocuments();
    const getRandomId = Math.ceil(Math.random() * count);
    const fortune = await Fortune.find({ id: getRandomId });
    res.status(200).json(fortune);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/** Gets number of fortunes */
const getNumFortunes = async (req, res) => {
  try {
    const numFortunes = await Fortune.countDocuments();
    res.status(200).json(numFortunes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/** Creates a fortune */
const createFortune = async (req, res) => {
  //id should be incremented automatically
  const content = req.body;
  try {
    const fortune = await Fortune.create(content);
    res.status(201).json(fortune);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  if (!content) {
    res.status(418).send({ message: "We need fortune content!" });
  }
};

/* Updates a fortune */
const updateFortune = async (req, res) => {
  try {
    const { id } = req.params;
    const fortune = await Fortune.findOneAndUpdate({ id: id }, req.body); //find a way to update a specific variable
    res.status(200).json(fortune);

    if (!fortune) {
      return res.status(404).json({ message: "Fortune not found." });
    }

    const updatedFortune = await CSSMathProduct.find({ id: id });
    res.status(200).json("fortune has now been updated to updatedFortune");
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
};

/* Deletes a fortune based on the provided id */
const deleteFortune = async (req, res) => {
  try {
    const { id } = req.params;
    const fortune = await Fortune.findOneAndDelete({ id: id });
    if (!fortune) {
      res.status(404).json({ message: "Fortune not found" });
    }
    res.status(204).json({ message: "Fortune deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
