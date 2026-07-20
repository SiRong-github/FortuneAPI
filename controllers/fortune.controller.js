const Fortune = require("../models/fortune.model.js");
const mongoose = require("mongoose");

/** Gets a list of all fortunes */
const getFortunes = async (req, res) => {
  try {
    const fortunes = await Fortune.find({});
    if (fortunes.length === 0) {
      return res
        .status(404)
        .json({ message: "There are currently no fortunes saved." });
    }
    return res.status(200).json(fortunes);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/** Gets a fortune based on the provided id */
const getFortune = async (req, res) => {
  try {
    const id = req.params.id;
    const fortune = await Fortune.findById(id);
    if (fortune == null) {
      return res.status(404).json({ message: "Fortune not found." });
    }
    return res.status(200).json(fortune);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

/** Gets random fortune */
const getRandomFortune = async (req, res) => {
  try {
    const count = await Fortune.countDocuments();
    if (count == 0) {
      return res
        .status(204)
        .json({ message: "There are currently no fortunes saved." });
    }
    const randomInd = Math.floor(Math.random() * count);
    const fortune = Array.from(await Fortune.find({}))[randomInd];
    return res.status(200).json(fortune);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

/** Gets number of fortunes */
const getNumFortunes = async (req, res) => {
  try {
    const numFortunes = await Fortune.countDocuments();
    return res.status(200).json(numFortunes);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

/** Creates a fortune */
const createFortune = async (req, res) => {
  try {
    const fortune = await Fortune.create(req.body);
    return res.status(201).json(fortune);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

/* Updates a fortune */
const updateFortune = async (req, res) => {
  try {
    const id = req.params.id;
    const fortune = await Fortune.findByIdAndUpdate(
      id,
      {
        content: req.body.content,
      },
      { ReturnDocument: "before" },
    );
    if (fortune == null) {
      return res.status(404).json({ message: "Fortune not found." });
    }
    const updatedFortune = await Fortune.findById(id);
    return res.status(200).json({
      message: `${fortune.content} has now been updated to: ${updatedFortune.content}`,
    });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
  }
};

/* Deletes a fortune based on the provided id */
const deleteFortune = async (req, res) => {
  try {
    const fortune = await Fortune.findByIdAndDelete(req.params.id);
    if (!fortune) {
      return res.status(404).json({ message: "Id not found." });
    }
    return res.sendStatus(204);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error." });
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
