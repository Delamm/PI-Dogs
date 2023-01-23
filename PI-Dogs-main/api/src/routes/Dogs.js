const { parse } = require("dotenv");
const express = require("express");
const { Router } = require("express");
const router = Router();
const { Dog, Temper } = require("../db.js");
const axios = require("axios");

const { getAllData } = require("../controllers/controllers.js");

router.get("/", async (req, res) => {
  const name = req.query.name;
  const allDogs = await getAllData();
  try {
    if (name) {
      const dogSelected = allDogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      if (dogSelected.length) {
        return res.status(200).send(dogSelected);
      } else {
        return res.status(404).send({ error: "Dog not found" });
      }
    } else {
      return res.status(201).json(allDogs);
    }
  } catch (error) {
    res.status(404).send({ error: "Dog not found" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const allData = await getAllData();
  try {
    const dogId = allData.filter((data) => data.id == id);
    if (dogId.length) {
      return res.status(200).send(dogId);
    } else {
      return res.status(404).send({ error: "Dog not found" });
    }
  } catch (error) {
    console.log(error);
    return res.status(404).send({ error: "Dog not found" });
  }
});

router.post("/", async (req, res) => {
  let {
    name,
    height_min,
    height_max,
    weight_min,
    weight_max,
    lifeTime,
    temperament,
  } = req.body;

  const dogCreate = await Dog.findOne({
    where: { name: name },
  });

  if (dogCreate) {
    return res.status(403).send("The dog already exist");
  } else {
    let dogCreated = await Dog.create({
      name,
      height_min,
      height_max,
      weight_min,
      weight_max,
      lifeTime,
    });

    let temp = await Temper.findAll({
      where: { name: temperament },
    });

    dogCreated.addTemper(temp);
    return res.status(200).send("The dog was successfully created");
  }
});

module.exports = router;
