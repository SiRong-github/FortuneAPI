const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.json());

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));

app.get("/fortune", (req, res) => {
  res.status(200).send({
    fortune: "Work smart not hard.",
  });
});

app.post("/fortune/:id", (req, res) => {
  const { id } = req.params;
  const { content } = req.body;

  if (!content) {
    res.status(418).send({ message: "We need fortune content!" });
  }

  req.send({
    fortune: `fortune with your ${content} and ID of ${id}`,
  });
});
