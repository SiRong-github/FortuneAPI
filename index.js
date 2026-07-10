const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Fortune = require("./models/fortune.model.js");
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

app.get("/fortunes", async (req, res) => {
  try {
    const fortunes = await Fortune.find({});
    res.status(200).json(fortunes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/fortunes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fortune = await Fortune.find({ id: id });
    res.status(200).json(fortune);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/fortunes", async (req, res) => {
  try {
    const fortune = await Fortune.create(req.body);
    res.status(201).json(fortune);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  if (!content) {
    res.status(418).send({ message: "We need fortune content!" });
  }
});

app.put("/fortunes/:id", async (req, res) => {
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
});

app.delete("/fortunes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const fortune = await Fortune.findOneAndDelete({ id: id });

    if (!fortune) {
      res.status(404).json({ message: "Fortune not found" });
    }

    res.status(200).json({ message: "Fortune deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
mongoose
  .connect(
    "mongodb+srv://admin:<db_password>@backenddb.uitoho2.mongodb.net/?appName=BackendDB",
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
      console.log("Server is running on port", PORT);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
