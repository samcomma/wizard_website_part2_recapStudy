const express = require("express");
const morgan = require("morgan");
const postBank = require("./postBank");
const postList = require("./views/postList");
const postDetails = require("./views/postDetails");
const db = require('./db')

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + "/public"));

app.get("/", async (req, res) => {
  const posts = await db.postList();
  res.send(posts);
});

app.get("/posts/:id", async (req, res) => {
  const post = await db.postDetails(req.params.id);
  res.send(post);
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});