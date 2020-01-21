const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ mesage: "something went wrong" });
});

//GET all cars -- tested and working

server.get("/", async (req, res, next) => {
  try {
    res.json(await db.select("*").from("cars"));
  } catch (err) {
    next(err);
  }
});

//POST new car -- tested and working

server.post("/", async (req, res, next) => {
  try {
    const [id] = await db("cars").insert(req.body);
    res.json(await db("cars").where("id", id));
  } catch (err) {
    next(err);
  }
});

//UPDATE a car --tested and working

server.put("/:id", async (req, res, next) => {
  try {
    await db("cars")
      .where("id", req.params.id)
      .update(req.body);
    res.status(200).json({ message: "car record was updated" });
  } catch (err) {
    next(err);
  }
});

//DELETE a car -- tested and working

server.delete("/:id", async (req, res, next) => {
  try {
    await db("cars")
      .where("id", req.params.id)
      .del();
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = server;
