// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/report", (req, res) => {
  const report = req.body;
  console.log("Received report:", report);

  // TODO: Save to database here

  res.status(200).json({ message: "Report received successfully" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
