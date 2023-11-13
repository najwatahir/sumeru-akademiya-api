const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3002;
const router = require("./routers/index.router");

const Students = [
  "Alhaitham",
  "Wanderer",
  "Layla",
  "Faruzan",
  "Kaveh",
  "Tighnari",
];

const Darshan = [
  "Amurta",
  "Rtawahist",
  "Spantamad",
  "Haravatat",
  "Vahumana",
  "Kshahrewar",
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.get("/students", (req, res) => {
  res.json({ data: Students });
});

app.delete("/students/:id", (req, res) => {
  Students.splice(req.params.id, 1);
  res.json({ data: Students });
});

app.post("/students", (req, res) => {
  Students.push(req.body.student);
  res.json({ data: Students });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
